import {Locale, useTranslations} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {use} from 'react';
import PageLayout from '@/components/PageLayout';

type Props = {
    params: Promise<{ locale: Locale }>;
};

export default function JobPage({params}: Props) {
    const {locale} = use(params);

    // Enable static rendering
    setRequestLocale(locale);

    const t = useTranslations('JobPage');

    return (
        <PageLayout title={t('title')}>
            <div className="max-w-[490px]">
                {t.rich('description', {
                    p: (chunks) => <p className="mt-4">{chunks}</p>,

                })}
            </div>

        </PageLayout>
    );
}
