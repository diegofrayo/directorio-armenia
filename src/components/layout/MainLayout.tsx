import { useState } from 'react';
import Link from 'next/link';

import { Modal } from '~/components/primitive';
import { ContentBox } from '~/components/pages/_shared';
import twcss from '~/lib/twcss';

export default function MainLayout({ children }) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleAddBussinessClick() {
    setIsModalVisible(true);
  }

  return (
    <main className="tw-mx-auto tw-max-w-screen-md tw-text-center tw-p-6">
      <header>
        <h1 className="tw-inline-block tw-mx-auto tw-mb-8">
          <Link href="/">
            <a>
              <span className="tw-block tw-text-3xl tw-leading-none tw-font-hairline">
                directorio
              </span>
              <strong className="tw-block tw-text-xl tw-text-right">ARMENIA</strong>
            </a>
          </Link>
        </h1>
        <nav>
          <ul className="tw-block sm:tw-inline-flex tw-w-full">
            <li className="tw-flex-1 tw-text-gray-100 tw-bg-gray-900 hover:tw-bg-gray-800 tw-font-bold tw-cursor-pointer tw-my-1 sm:tw-my-0 hover:tw-underline">
              <Link href="/">
                <a className="tw-block tw-p-2">inicio</a>
              </Link>
            </li>
            <li className="tw-flex-1 tw-text-gray-100 tw-bg-gray-900 hover:tw-bg-gray-800 tw-font-bold tw-cursor-pointer tw-my-1 sm:tw-my-0 hover:tw-underline tw-mx-0 sm:tw-mx-2">
              <Link href="/categorias">
                <a className="tw-block tw-p-2">categorías</a>
              </Link>
            </li>
            <li className="tw-flex-1 tw-text-yellow-400 tw-bg-gray-900 hover:tw-bg-gray-800 tw-font-bold tw-cursor-pointer tw-my-1 sm:tw-my-0 tw-underline">
              <button
                className="tw-w-full tw-block tw-h-full tw-p-2"
                onClick={handleAddBussinessClick}
              >
                agrega un negocio!
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <section className="tw-mt-6 tw-pb-12">{children}</section>

      <footer className="tw-border-t tw-pt-2 tw-mt-10">
        <ul>
          <li className="tw-inline-block tw-m-2">
            <Link href="/terminos-y-condiciones">
              <a className="tw-font-bold tw-underline">términos y condiciones</a>
            </Link>
          </li>
          <li className="tw-inline-block tw-m-2">
            <Link href="/contacto">
              <a className="tw-font-bold tw-underline">contacto</a>
            </Link>
          </li>
        </ul>
      </footer>

      <Modal
        visible={isModalVisible}
        onCloseHandler={() => {
          setIsModalVisible(false);
        }}
      >
        <section className="modal-content tw-bg-white tw-p-6 tw-relative tw-max-w-screen-md tw-w-screen-md tw-max-h-full tw-overflow-auto">
          <section className="tw-px-6 tw-pt-6">
            <Modal.CloseButton />
            <ContentBox.Title>agrega un negocio a este sitio web</ContentBox.Title>
          </section>

          <section className="tw-my-6">
            <label htmlFor="name" className="tw-text-left tw-block">
              <InputLabel>
                nombre <span className="tw-text-red-600">(*)</span>
              </InputLabel>
              <InputElement
                type="text"
                id="name"
                name="name"
                className="input__element--name tw-border tw-border-black tw-p-2"
              />
            </label>
            <Separator className="tw-my-6" />

            <label htmlFor="whatsapp" className="tw-text-left tw-block">
              <InputLabel>
                whatsapp <span className="tw-text-red-600">(*)</span>
              </InputLabel>
              <div className="tw-w-full tw-flex tw-border tw-border-black">
                <InputIcon>+57</InputIcon>
                <InputElement
                  type="text"
                  id="whatsapp"
                  name="whatsapp"
                  className="whatsapp tw-flex-1 tw-p-2"
                />
              </div>
            </label>
            <Separator className="tw-my-6" />

            <label htmlFor="instagram" className="tw-text-left tw-block">
              <InputLabel>instagram</InputLabel>
              <div className="tw-w-full tw-flex tw-border tw-border-black">
                <InputIcon>@</InputIcon>
                <InputElement
                  type="text"
                  id="instagram"
                  name="instagram"
                  className="instagram tw-flex-1 tw-p-2"
                />
              </div>
            </label>
            <Separator className="tw-my-6" />

            <label htmlFor="facebook" className="tw-text-left tw-block">
              <InputLabel>facebook</InputLabel>
              <div className="tw-w-full tw-flex tw-border tw-border-black">
                <InputIcon>@</InputIcon>
                <InputElement
                  type="text"
                  id="facebook"
                  name="facebook"
                  className="facebook tw-flex-1 tw-p-2"
                />
              </div>
            </label>
            <Separator className="tw-my-6" />

            <label htmlFor="description" className="tw-text-left tw-block">
              <InputLabel>descripción</InputLabel>
              <InputElement
                is="textarea"
                id="description"
                name="description"
                className="description tw-border tw-border-black tw-p-2"
              />
            </label>
          </section>

          <button className="tw-bg-black tw-text-white tw-py-4 tw-px-4 tw-w-full tw-font-bold">
            agregar
          </button>
        </section>
      </Modal>

      <style jsx>{`
        .modal-content {
          width: 600px;
        }

        :global(.input__icon) {
          height: 50px;
          width: 60px;
        }

        :global(.input__element) {
          height: 50px;
          width: calc(100% - 60px);
        }

        :global(.input__element--name) {
          width: 100%;
        }

        :global(.description) {
          resize: none;
          height: 100px;
          width: 100%;
        }
      `}</style>
    </main>
  );
}

// __- Components __-

const InputLabel = twcss.p`tw-mb-1 tw-font-bold tw-cursor-pointer`;
const InputIcon = twcss.span`input__icon tw-bg-gray-400 tw-text-gray-800 tw-flex tw-items-center tw-text-sm tw-font-bold tw-border-r tw-border-black tw-justify-center tw-flex-shrink-0`;
const InputElement = twcss.input`input__element tw-p-2 tw-rounded-none`;
const Separator = twcss.hr`tw-border-0`;
