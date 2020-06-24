import { useState } from "react";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { Modal } from "~/components/primitive";
import { ContentBox, Title, BusinessItem } from "~/components/pages";
import twcss from "~/lib/twcss";

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
        <Formik
          initialValues={{
            name: "",
            whatsapp: "",
            instagram: "",
            facebook: "",
            description: "",
          }}
          validate={values => {
            const errors: any = {};

            if (values.name.length < 2) {
              errors.name = "el nombre debe tener al menos 2 carácteres";
            }
            if (values.whatsapp.length !== 10 || !/^[0-9]*$/.test(values.whatsapp)) {
              errors.whatsapp =
                "el teléfono debe tener 10 carácteres y solo debe contener números";
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
            }, 3000);
          }}
        >
          {({
            values,
            isSubmitting,
            isValid,
            handleSubmit,
            errors,
            validateForm,
            setFieldTouched,
          }) => {
            return (
              <Form
                className="tw-bg-white tw-p-6 tw-relative tw-max-w-screen-sm tw-w-full tw-max-h-full tw-overflow-auto"
                id="form-container"
              >
                <ModalHeader>
                  <Modal.CloseButton />
                  <Title>agrega un negocio a este sitio web</Title>
                </ModalHeader>

                <section className="tw-my-10">
                  <InputContainer htmlFor="name">
                    <InputLabel>
                      nombre <span className="tw-text-red-600">(*)</span>
                    </InputLabel>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      className="input__element--name tw-border tw-border-black tw-p-2"
                      as={InputElement}
                      minLength={2}
                    />
                    <ErrorMessage name="name" component={InputError} />
                  </InputContainer>
                  <Separator />

                  <InputContainer htmlFor="whatsapp">
                    <InputLabel>
                      whatsapp <span className="tw-text-red-600">(*)</span>
                    </InputLabel>
                    <InputGroup>
                      <InputIcon>+57</InputIcon>
                      <Field
                        type="text"
                        id="whatsapp"
                        name="whatsapp"
                        as={InputElement}
                        minLength={10}
                        maxLength={10}
                      />
                    </InputGroup>
                    <ErrorMessage name="whatsapp" component={InputError} />
                  </InputContainer>
                  <Separator />

                  <InputContainer htmlFor="instagram">
                    <InputLabel>instagram</InputLabel>
                    <InputGroup>
                      <InputIcon>@</InputIcon>
                      <Field
                        type="text"
                        id="instagram"
                        name="instagram"
                        as={InputElement}
                      />
                    </InputGroup>
                    <ErrorMessage name="instagram" component={InputError} />
                  </InputContainer>
                  <Separator />

                  <InputContainer htmlFor="facebook">
                    <InputLabel>facebook</InputLabel>
                    <InputGroup>
                      <InputIcon>@</InputIcon>
                      <Field
                        type="text"
                        id="facebook"
                        name="facebook"
                        as={InputElement}
                      />
                    </InputGroup>
                    <ErrorMessage name="facebook" component={InputError} />
                  </InputContainer>
                  <Separator />

                  <InputContainer htmlFor="description">
                    <InputLabel>descripción</InputLabel>
                    <Field
                      as="textarea"
                      type="text"
                      id="description"
                      name="description"
                      className="description tw-p-2 tw-rounded-none tw-border tw-border-black"
                    />
                    <ErrorMessage name="description" component={InputError} />
                  </InputContainer>
                </section>

                <ContentBox
                  className="tw-mb-12"
                  classNameOverrides={["tw-border", "tw-border-4"]}
                >
                  <p className="tw-font-bold tw-mb-2 tw-text-center tw-underline">
                    vista previa
                  </p>
                  <BusinessItem
                    item={{
                      name: values.name,
                      whatsapp: values.whatsapp,
                      instagram: values.instagram,
                      facebook: values.facebook,
                      description: values.description,
                    }}
                  />
                </ContentBox>

                <SubmitButton
                  type="button"
                  disabled={isSubmitting || !isValid}
                  tw-states={{
                    invalid: !isValid,
                    loading: isSubmitting,
                  }}
                  onClick={async () => {
                    const formErrors = await validateForm(values);
                    const isValidForm = Object.values(formErrors).reduce((acum, curr) => {
                      return acum && !curr;
                    }, true);

                    if (!isValidForm) {
                      document.getElementById("form-container").scrollTop = 0;

                      if (formErrors.whatsapp) {
                        setFieldTouched("whatsapp", true);
                        document.getElementById("whatsapp").focus();
                      }

                      if (formErrors.name) {
                        setFieldTouched("name", true);
                        document.getElementById("name").focus();
                      }

                      return;
                    }

                    handleSubmit();
                  }}
                >
                  {isSubmitting ? "cargando..." : "agregar"}
                </SubmitButton>
              </Form>
            );
          }}
        </Formik>
      </Modal>

      <style jsx>{`
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

// --- Components ---

const ModalHeader = twcss.section`tw-px-6 tw-pt-10`;
const InputContainer = twcss.label`tw-text-left tw-block`;
const InputLabel = twcss.p`tw-mb-1 tw-font-bold tw-cursor-pointer`;
const InputGroup = twcss.div`tw-w-full tw-flex tw-border tw-border-black`;
const InputIcon = twcss.span`input__icon tw-bg-gray-400 tw-text-gray-800 tw-flex tw-items-center tw-text-sm tw-font-bold tw-border-r tw-border-black tw-justify-center tw-flex-shrink-0`;
const InputElement = twcss.input`input__element tw-p-2 tw-rounded-none`;
const InputError = twcss.p`tw-text-red-600 tw-text-sm tw-text-right tw-pl-6 tw-mt-1`;
const SubmitButton = twcss.button({
  __base: "tw-bg-black tw-text-white tw-py-4 tw-px-4 tw-w-full tw-font-bold",
  initial: "hover:tw-bg-gray-900",
  invalid: "tw-opacity-25 tw-cursor-not-allowed",
  loading: "tw-opacity-25 tw-cursor-wait",
});
const Separator = twcss.hr`tw-border-0 tw-my-5`;
