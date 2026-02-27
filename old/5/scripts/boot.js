if (!localStorage.getItem('TOS')) {
    const userAgreement = confirm(`Terms of Service\n
BY CLICKING OK, YOU AGREE TO THESE TOS:\n
1. Storage of Files in LocalStorage\n
We reserve the right to store files and data in the LocalStorage of your browser. This may include, but is not limited to, configuration data, user preferences, and other related information.\n
2. Responsibility and Risk\n
You acknowledge and agree that all data and information processed, stored, or otherwise handled through this service may be lost, corrupted, or otherwise compromised. You are 100% responsible for any and all consequences, damages, or losses that may arise from using this service, including but not limited to data loss, hardware damage, or any other issues.\n
3. No Warranty\n
The service is provided "as-is" with no warranty, express or implied. We do not guarantee that the service will be error-free, secure, or uninterrupted. You use the service entirely at your own risk, and we are not liable for any damages, losses, or issues that may occur as a result of using the service.\n
4. IP Address Monitoring\n
By accessing and using our services, you agree to the monitoring and verification of your IP address. This information may be collected temporarily to detect and prevent fraudulent activities, abuse, and other unlawful actions. Please note that we do not store your IP address beyond what is necessary for these purposes, and it will not be retained or logged after the verification process is complete. By using our services, you acknowledge that you have read and understood this policy regarding the temporary use and verification of your IP address. Note: This may not apply to all versions.\n
5. Modification of Terms\n
We reserve the right to modify these Terms of Service at any time. Any changes will be effective immediately upon posting. It is your responsibility to review these terms periodically to stay informed of any updates.`);

    if (userAgreement) {
        // Nutzer hat zugestimmt
        localStorage.setItem('TOS', 'true');
    } else {
        // Nutzer hat abgelehnt, lade die Seite neu
        alert("You must accept the Terms of Service to use this website. The page will now reload.");
        location.reload(); // Seite neu laden
    }
}
alert('Info: Files are not permanently saved and you are responsible for any javascript and other files you run here');
        renderFiles();