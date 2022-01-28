import React, { useEffect, useState } from "react"
import axios from "axios"
import { useFormik } from "formik"

export const Operations = () => {
    const [operations, setOperations] = useState([])
    const formik = useFormik({
        initialValues: {
            concept: "",
            amount: 0,
            date: "",
            type: "",
        },
        onSubmit: async (values) => {
            const { concept, amount, date, type } = values
            await axios.post("http://localhost:4000/operations", {
                concept,
                amount,
                date,
                type,
            })
        },
    })
    useEffect(() => {
        try {
            const getAllOperations = async () => {
                const response = await axios.get(
                    "http://localhost:4000/operations"
                )
                setOperations(response.data)
            }
            getAllOperations()
        } catch (e) {
            throw e
        }
    }, [])

    return (
        <>
            <ul>
                {operations.map((o) => {
                    return (
                        <li>
                            {o.concept}, {o.amount}
                        </li>
                    )
                })}
            </ul>

            <form action="#" onSubmit={formik.handleSubmit} method="post">
                <input
                    type="text"
                    name="concept"
                    placeholder="Concept"
                    onChange={formik.handleChange}
                    value={formik.values.concept}
                />
                <input
                    type="number"
                    name="amount"
                    placeholder="Amount"
                    onChange={formik.handleChange}
                    value={formik.values.amount}
                />
                <input
                    type="date"
                    name="date"
                    placeholder="Date"
                    onChange={formik.handleChange}
                    value={formik.values.date}
                />
                <input
                    type="text"
                    name="type"
                    placeholder="Type"
                    onChange={formik.handleChange}
                    value={formik.values.type}
                />
                <button type="submit">Crear operacion</button>
            </form>
        </>
    )
}
