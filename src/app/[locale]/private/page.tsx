import {Locale, useTranslations} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {use} from 'react';
import PageLayout from '@/components/PageLayout';

type Props = {
    params: Promise<{locale: Locale}>;
};

export default function PrivatePage({params}: Props) {
    const {locale} = use(params);

    // Enable static rendering
    setRequestLocale(locale);

    const t = useTranslations('PrivatePage');

    return (
        <PageLayout title={t('title')}>

            <section className="py-4 rounded-lg bg-white text-center">
                <div className="container mx-auto px-2">
                    <img
                        src="/images/20240601_173001.jpg"
                        alt="Example"
                        className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
                    />
                </div>
            </section>

            <div className="max-w-[490px]">
                {t.rich('description', {
                    p: (chunks) => <p className="mt-4">{chunks}</p>,

                })}
            </div>



        </PageLayout>
    );
}
