import { useState } from 'react'

export default function CookieStandForm({ onCreate }) {

    const initialValues = {
        location: '',
        max: 0,
        min: 0,
        avg: 0,
    };

    const [values, setValues] = useState(initialValues);

    function submitHandler(event) {
        event.preventDefault();
        onCreate(values);
        setValues(initialValues)
    }

    function inputChangeHandler(event) {
        let { name, value, type } = event.target;

        if (type === "number") {
            value = parseFloat(value);
        }

        setValues({ ...values, [name]: value });
    }
    return (
        <form onSubmit={submitHandler} className="w-full mb-5 text-xs font-bold text-center uppercase bg-green-200 border border-green-400 rounded-md p-7">
            <div className="flex items-stretch justify-between mb-5 gap-x-4">
                <div className="flex-1">
                    <label htmlFor="location">Add Location</label>
                    <input type="text" name="location" id="location" value={values.location} onChange={inputChangeHandler} placeholder="Cookie Stand Location" className="w-full p-2 mt-2 h-7"/>
                </div>

                <button type="submit" className="w-1/3 uppercase bg-green-500 rounded-sm align-center">Create Stand</button>
                
            </div>

            <div className="flex items-end justify-between gap-x-10">
                <FormInputSection>
                    <label htmlFor="min">Minimum Customers per Hour</label>
                    <input type="number" name="min" id="min" className="w-full p-2 mt-2 h-7" value={values.min} onChange={inputChangeHandler} />
                </FormInputSection>
                <FormInputSection>
                    <label htmlFor="max">Maximum Customers per Hour</label>
                    <input type="number" name="max" id="max" className="w-full p-2 mt-2 h-7" value={values.max} onChange={inputChangeHandler} />
                </FormInputSection>
                <FormInputSection>
                    <label htmlFor="avg">Average Cookies per Sale</label>
                    <input type="number" name="avg" id="avg" className="w-full p-2 mt-2 h-7" value={values.avg} onChange={inputChangeHandler} />
                </FormInputSection>
            </div>
        </form>
    );
}

function FormInputSection({ children }) {
    return (
        <div className="flex-1 rounded-sm">
            {children}
        </div>
    );
}
