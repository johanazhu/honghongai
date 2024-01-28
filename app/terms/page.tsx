import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
// import Footer from "../components/Footer";
// import Header from "../components/Header";

const Privacy: NextPage = () => {


    return (
        <div className="flex max-w-5xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
            <main>
                <section
                    aria-labelledby="Terms of Service"
                    className="relative overflow-hidden py-20 sm:py-24">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
                        <div className="mx-auto lg:mx-0">
                            <h1 id="faq-title" className="font-display tracking-tight text-slate-900 md:text-3xl text-xl">
                                Terms of Service | honghongai
                            </h1>
                            <p className="mt-10 md:text-lg text-md text-slate-700">
                                Posted on: January 28, 2024<br />
                                Last updated: January 28, 2024
                            </p>
                        </div>
                        <ul role="list" className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none">
                            <li>
                                <ul role="list" className="flex flex-col gap-y-8">
                                    <li>
                                        <h2 className="font-display md:text-3xl text-xl leading-7 text-slate-900">
                                            1. Introduction
                                        </h2>
                                        <p className="mt-4 md:text-lg text-md text-slate-700">
                                            This website is operated by instant.org. Throughout the site, the terms "we", "us", and "our" refer to instant.org. Instant.org provides this website, including all information, tools, and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies, and notices stated here.

                                            By accessing our site and/or purchasing something from us, you engage in our "Service" and agree to be bound by the following terms and conditions ("Terms of Service"), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site.
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className="font-display md:text-3xl text-xl leading-7 text-slate-900">
                                            2. Use of the Service
                                        </h2>
                                        <p className="mt-4 md:text-lg text-md text-slate-700">
                                            You are permitted to use this website for browsing the content we have made available. The Service must not be used for any illegal or unauthorized purposes. You agree to comply with all applicable laws, rules, and regulations in connection with your use of the website and its content.
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className="font-display md:text-3xl text-xl leading-7 text-slate-900">
                                            3. Access
                                        </h2>
                                        <p className="mt-4 md:text-lg text-md text-slate-700">
                                            We reserve the right, at our sole discretion, to withdraw or modify this website and any service or material we provide on the website, without notice. We will not be liable if, for any reason, all or any part of the website is unavailable at any time or for any duration.
                                        </p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <ul role="list" className="flex flex-col gap-y-8">
                                    <li>
                                        <h2 className="font-display md:text-3xl text-xl leading-7 text-slate-900">
                                            4. Intellectual Property Rights
                                        </h2>
                                        <p className="mt-4 md:text-lg text-md text-slate-700">
                                            All content and materials on this website are the property of instant.org and are protected by copyright, trademark, and other relevant laws. You may view, copy, and print materials from the website strictly in accordance with these Terms of Service.
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className="font-display md:text-3xl text-xl leading-7 text-slate-900">
                                            5. Disclaimer of Warranties &amp; Limitations of Liability
                                        </h2>
                                        <p className="mt-4 md:text-lg text-md text-slate-700">
                                            This website, along with all the information, content, and materials, is provided by instant.org on an “as is” and “as available” basis. Instant.org makes no representations or warranties of any kind, whether express or implied.

                                            Instant.org will not be liable for any damages of any kind arising from your use of this website.
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className="font-display md:text-3xl text-xl leading-7 text-slate-900">
                                            6. Governing Law
                                        </h2>
                                        <p className="mt-4 md:text-lg text-md text-slate-700">
                                            These Terms will be governed by and interpreted in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions.
                                        </p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <ul role="list" className="flex flex-col gap-y-8">
                                    <li>
                                        <h2 className="font-display md:text-3xl text-xl leading-7 text-slate-900">
                                            7. Changes To Terms of Service
                                        </h2>
                                        <p className="mt-4 md:text-lg text-md text-slate-700">
                                            The most current version of the Terms of Service can always be reviewed on this page. We reserve the right, at our sole discretion, to update, change, or replace any part of these Terms of Service by posting updates and changes to our website.
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