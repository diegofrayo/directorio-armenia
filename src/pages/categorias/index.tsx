import Link from 'next/link';

import { MainLayout } from '~/components/layout';
import { ContentBox } from '~/components/pages/_shared';

export default function Categories() {
  const CATEGORIES = [
    { slug: 'comidas', name: 'comidas', icon: '🥘', total: 9 },
    { slug: 'licorerias', name: 'licorerías', icon: '🍺', total: 2 },
    {
      slug: 'servicio-de-domicilio',
      name: 'servicio de domicilio',
      icon: '🛵',
      total: 5,
    },
    { slug: 'ropa', name: 'ropa', icon: '👗', total: 4 },
  ].sort((a, b) => (a.name > b.name ? 1 : -1));

  return (
    <MainLayout>
      <ContentBox>
        <ContentBox.Title>categorías</ContentBox.Title>
        <section className="tw-flex tw-flex-row tw-flex-wrap">
          {CATEGORIES.map((category, index) => {
            return (
              <article
                key={`category-${index}`}
                className="category tw-mb-2 tw-border tw-mx-0 sm:tw-mx-1 tw-cursor-pointer hover:tw-bg-yellow-200"
              >
                <Link href={`/categorias/${category.slug}`}>
                  <a className="tw-block tw-p-4 tw-w-full tw-flex tw-flex-row tw-items-center">
                    <span className="emoji tw-text-3xl">{category.icon}</span>
                    <span className="tw-ml-3 tw-mr-4 tw-flex-1 tw-text-left">
                      {category.name}
                    </span>
                    <strong>[{category.total}]</strong>
                  </a>
                </Link>
              </article>
            );
          })}
        </section>
      </ContentBox>

      <style jsx>{`
        .category {
          width: 100%;
        }

        @media (min-width: 640px) {
          .category {
            width: 48%;
          }
        }
      `}</style>
    </MainLayout>
  );
}
