import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const AboutPage = () => {
    return (
        <div className="px-4 sm:px-6 md:px-8 py-6">
            <h1 className="text-4xl font-bold text-brand-dark">
                About Nami
            </h1>
            <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
            >
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg font-bold">
                        Our Mission
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>
                            Empowering people to be their best selves by providing high quality education to all. We help bridge the gaps between languages through engaging lessons tailored to each individual learner.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-lg font-bold">
                        Our Vision
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>
                            We envision a world where there are no barriers to people achieving their potential. We see a world where all people can sort their problems out through their words, not conflict.
                        </p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="text-lg font-bold">
                        Our Values
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>
                            <ol className="list-decimal list-inside space-y-2">
                                <li>Everyone deserves an equal opportunity to showcase their talents, regardless of their background or previous education</li>
                                <li>Everyone should have an equal opportunity to receive a quality education</li>
                                <li>Education should not have to compromise quality to be open to everyone</li>
                            </ol>
                        </p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default AboutPage;