import { useState } from "react";

export default function Forms() {
    // State for storing form data
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        content: "",
    });

    // State for submission status and loading indicator
    const [status, setStatus] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const scriptURL = import.meta.env.VITE_SCRIPT_URL;

        // Ensure script URL is configured
        if (!scriptURL) {
            setStatus("Error: Script URL is not configured in the environment.");
            return;
        }

        setIsSubmitting(true); // Start loading state
        setStatus(""); // Clear previous status messages

        try {
            const response = await fetch(scriptURL, {
                method: "POST",
                headers: {
                    "Content-Type": "text/plain;charset=utf-8",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error("Network response was not ok");

            const result = await response.json();

            if (result.status === "success") {
                setStatus("Form submitted successfully!");
                setFormData({ name: "", email: "", phone: "", content: "" });
            } else {
                setStatus("Failed to submit the form. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            setStatus("An error occurred while submitting the form.");
        } finally {
            setIsSubmitting(false); // Stop loading state
        }
    };

    return (
        <>
            <form
                className="font-lato flex flex-col items-start space-y-4"
                onSubmit={handleSubmit}
            >
                <div className="flex content-center border-b-[1px] space-x-3">
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        className="p-1 bg-inherit w-60"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex content-center border-b-[1px] space-x-3">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        className="p-1 bg-inherit w-60"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex content-center border-b-[1px] space-x-3">
                    <label>Phone Number:</label>
                    <input
                        type="tel"
                        name="phone"
                        className="p-1 bg-inherit w-44"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex flex-col border-b-[1px]">
                    <label>What are you looking for:</label>
                    <textarea
                        name="content"
                        className="p-1 bg-inherit"
                        rows={4}
                        cols={31}
                        value={formData.content}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex justify-center items-center">
                    <button
                        type="submit"
                        className={`py-2 px-4 rounded-full border-[1px] bg-inherit text-white hover:bg-gray-200 hover:text-green-700 ${
                            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                </div>
                {status && (
                    <p
                        className={`mt-4 ${
                            status.includes("success") ? "text-green-500" : "text-red-500"
                        }`}
                    >
                        {status}
                    </p>
                )}
            </form>
        </>
    );
}