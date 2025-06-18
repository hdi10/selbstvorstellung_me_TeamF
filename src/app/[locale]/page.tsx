import {Locale, useTranslations} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {use} from 'react';
import PageLayout from '@/components/PageLayout';

type Props = {
    params: Promise<{locale: Locale}>;
};

export default function IndexPage({params}: Props) {
    const {locale} = use(params);

    // Enable static rendering
    setRequestLocale(locale);

    const t = useTranslations('IndexPage');

    return (
        <PageLayout title={t('title')}>

            <section className="py-4 rounded-lg ">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="md:w-2/3">
                        <p className="text-left max-w-[590px]">
                            {t.rich('description')}
                        </p>
                    </div>

                    <div className="md:w-1/3 flex justify-center">
                        <img
                            src="/images/IMG-20230906-WA0001.jpg"
                            alt="Portrait von Harun Dastekin"
                            className="w-48 md:w-64 rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </section>


            {/*<p className="max-w-[590px]">*/}
            {/*    {t.rich('description',*/}
            {/*    )}*/}
            {/*</p>*/}



        </PageLayout>
    );
}
