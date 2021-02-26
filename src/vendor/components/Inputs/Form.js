import React, { useState, Children, useEffect, useRef, useContext } from 'react'
import Button from '../Buttons/Button';

const FormContext = React.createContext();

export function useForm() {
    return useContext(FormContext);
}

export default function Form({
    valuesChanges = () => { },
    display = 'grid',
    columns = '2',
    gap = '50',
    onSubmit = () => { },
    children,
    btnRounded = true,
    btnExpand = false,
    btnColor = 'primary',
    btnText = 'Submit',
    btnLg = false,
    noBtn = false
}) {

    const [clear, setClear] = useState(false);
    const [value, setValue] = useState({
        valid: false
    });
    const [id] = useState('' + Date.now())
    const types = {
        rounded: btnRounded,
        expand: btnExpand,
        color: btnColor
    };

    let newChildren = Children.map(children, child => {
        if (child.props.name) {
            return React.cloneElement(child, {
                formValue: value,
                setFormValue: (value) => {
                    let v = JSON.parse(JSON.stringify(value));
                    let c = 0, noError = true;
                    for (const el in v) {
                        if (el.indexOf('error') !== -1) {
                            if (v[el]) {
                                noError = false;
                            }
                            ++c;
                        }
                    }

                    v.valid = noError && c > 0;
                    setValue(v);
                    valuesChanges(v);
                },
                [child.props.name + '_error']: child.props.required ? true : false
            });
        } else {
            return { ...child }
        }
    });

    useEffect(() => {
        const v = JSON.parse(JSON.stringify(value));
        Children.map(newChildren, child => {
            for (const el in child.props) {
                if (el.indexOf('error') !== -1) {
                    v[el] = child.props[el];
                }
            }
        });
        setValue(v);
        valuesChanges(v);
    }, []);

    let style = {};
    const col = Math.floor(100 / columns);
    if (display === 'grid') {
        style = {
            display: 'grid',
            gridTemplateColumns: `repeat(auto-fit, minmax(200px, 1fr))`
        }
    }

    useEffect(() => {
        newChildren = Children.map(newChildren, child => {
            return React.cloneElement(child, { ...child, reset: true });
        });
    }, [clear]);

    return (
        <FormContext.Provider value={clear}>
            <form style={style} className="form" id={id} onSubmit={(e) => {
                e.preventDefault();
                const v = JSON.parse(JSON.stringify(value));

                for (let attr in v) {
                    if (attr.indexOf('error') !== -1) {
                        delete v[attr];
                    }
                }

                delete v.valid;
                onSubmit(v);
                setClear(true);
                setTimeout(() => {
                    setClear(false);
                }, 1000);
            }}>
                {newChildren}
            </form>
            {!noBtn && <div>
                {value && value.valid ?
                    <Button lg={btnLg} form={id} type="submit" {...types}>{btnText}</Button>
                    : <></>}
            </div>}
        </FormContext.Provider>
    )
}
