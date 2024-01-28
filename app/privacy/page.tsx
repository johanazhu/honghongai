import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'


const Privacy: NextPage = () => {

    return (
        <div className="flex max-w-5xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
            <main>
                <section
                    aria-labelledby="Privacy Policy"
                    className="relative overflow-hidden py-20 sm:py-24">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
                        <div className="mx-auto lg:mx-0">
                            <h1 id="faq-title" className="font-display tracking-tight text-slate-900 md:text-3xl text-xl">
                                Privacy Policy | honghongai
                            </h1>
                            <p className="mt-10 md:text-lg text-md text-slate-700">
                                Posted on: January 28, 2024<br />
                                Last updated: January 28, 2024<br />
                                At honghongai, we are committed to protecting the privacy and security of our users. Understanding the importance of privacy, we strive to ensure that our data collection, usage, and sharing practices respect your privacy rights.
                            </p>
                        </div>
                        <ul role="list" className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none">
                            <li>
                                <ul role="list" className="flex flex-col gap-y-8"><li>
                                    <h2 className="font-display md:text-3xl text-xl leading-7 text-slate-900">1. Data Collection</h2>
                                    <p className="mt-4 md:text-lg text-md text-slate-700">
                                        We collect data to enhance your experience and improve our service, utilizing basic, anonymous analytics to understand user behavior without gathering any personally identifiable information (PII). The data we collect encompasses usage data, which includes information on how you interact with the website, such as page visits and interaction metrics. Additionally, we gather anonymous device information to help us optimize our platform for all users, noting the type of device and browser used to access our website. Our website also uses cookies to improve the user experience, facilitating features like remembering login details and preferences. You have the flexibility to manage or disable cookies through your browser settings, ensuring control over your personal data and how it's used to enhance your browsing experience.
                                    </p>
                                </li>
                                    <li>
                                        <h2 className="font-display md:text-3xl text-xl leading-7 text-slate-900">
                                            2. Use of Data
                                        </h2>
                                        <p className="mt-4 md:text-lg text-md text-slate-700">
                                            The primary purpose behind our data collection efforts is to enhance our website and customize it to better serve our users' needs. By analyzing the data, we aim to improve website functionality and user experience, gain insights into user engagement and interaction patterns, and make informed decisions about introducing new features and services. It's important to note that we do not use this data for commercial purposes, nor do we sell any information collected from our users.
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className="font-display md:text-3xl text-xl leading-7 text-slate-900">
                                            3. Data Sharing
                                        </h2>
                                        <p className="mt-4 md:text-lg text-md text-slate-700">
                                            We are committed to not sharing any data collected from our users with third parties, except as required by law. Any data sharing will only occur under strict conditions and with your explicit consent.
                                        </p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <ul role="list" className="flex flex-col gap-y-8"><li>
                                    <h2 className="font-display md:text-3xl text-xl leading-7 text-slate-900">
                                        4. Your Rights
                                    </h2>
                                    <p className="mt-4 md:text-lg text-md text-slate-700">
                                        Your privacy is our top priority, and we are committed to ensuring you have full control over your personal data. As part of this commitment, you are entitled to various rights including the right to access any personal data we hold about you, the right to rectify any inaccuracies in your personal data, the right to request the erasure of your personal data from our records, and the right to opt out of data analytics and cookies to prevent data collection during your visits. If you wish to exercise any of these rights, please reach out to our website administrator using the contact information available on our website.
                                    </p>
                                </li>
                                    <li>
                                        <h2 className="font-display md:text-3xl text-xl leading-7 text-slate-900">
                                            5. Changes to This Privacy Policy
                                        </h2>
                                        <p className="mt-4 md:text-lg text-md text-slate-700">
                                            We reserve the right to update our Privacy Policy to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this policy periodically for any updates.

                                            By using our website, you acknowledge that you have read and understand this Privacy Policy. For any questions or concerns regarding this policy or your personal data, please contact us directly.

                                            This enhanced Privacy Policy provides a clearer, more detailed understanding of how data is collected, used, and protected at hong.azhubaby.com, ensuring transparency and building trust with your users.
                                        </p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </section>

            </main>
            {/* <Footer /> */}
        </div>
    );
};

export default Privacy