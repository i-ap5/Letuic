export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { name, email, phone, description } = req.body;

    if (!name || !email || !phone || !description) {
        return res.status(400).json({ error: "All fields are required." });
    }

    const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLScgmztzzVO0N2Uvn2Dd3QAj2pQgreyKrLbIilOqCfdBjtZzaQ/formResponse";

    try {
        const formData = new URLSearchParams();
        formData.append("entry.397564941", name);
        formData.append("entry.908752501", email);
        formData.append("entry.1958228289", phone);
        formData.append("entry.1254308882", description);

        const response = await fetch(GOOGLE_FORM_ACTION_URL, {
            method: "POST",
            body: formData,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });

        if (!response.ok) {
            throw new Error(`Google Form returned status: ${response.status}`);
        }

        res.status(200).json({ success: true, message: "Form submitted successfully" });
    } catch (error) {
        console.error("Contact Form Submission Error:", error);
        res.status(500).json({ error: "Failed to submit form." });
    }
}
