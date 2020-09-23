import React, { useMemo } from 'react';
import { Formik } from 'formik';
import { useSelector } from 'react-redux';
import formValidation from '../../../helpers/formValidation';
import { getOriginsSelector, getEditedProductSelector } from '../../../redux/selectors/ProductsSelectors';
import postProductSaga from '../../../redux/sagas/productsSagas/postProductSaga';
import patchProductSaga from '../../../redux/sagas/productsSagas/patchProductSaga';
import useRunSaga from '../../../hooks/useRunSaga';

import Modal from '../../Modal/Modal';
import Input from '../../Inputs/Input';
import Btn from '../../Inputs/Btn';

const ProductForm = () => {
  const origins = useSelector(getOriginsSelector);
  const editedProduct = useSelector(getEditedProductSelector);
  const isEdit = useMemo(() => !!Object.keys(editedProduct).length, [editedProduct]);
  const addProduct = useRunSaga(postProductSaga);
  const editProduct = useRunSaga(patchProductSaga);

  const initialValue = {
    name: isEdit ? editedProduct.name : '',
    price: isEdit ? editedProduct.price : 0,
    origin: isEdit ? origins.filter(origin => origin.value === editedProduct.origin)[0] : origins[0],
  };

  return (
    <Modal title={isEdit ? 'Edit your product' : 'Add product'}>
      <Formik
        initialValues={initialValue}
        validationSchema={formValidation}
        onSubmit={values => {
          const postData = {
            product: {
              name: values.name,
              price: +values.price,
              origin: values.origin.value,
            },
          };

          isEdit ? editProduct(editedProduct.id, postData) : addProduct(postData);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          isSubmitting,
          setValues,
        }) => (
          <form onSubmit={handleSubmit} className="product-form">
            <div className="product-form__input-wrap">
              <Input
                name="name"
                placeholder="Name"
                type="text"
                value={values.name}
                onBlur={handleBlur}
                error={errors.name}
                touched={touched.name}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>

            <div className="product-form__input-wrap">
              <Input
                name="price"
                type="number"
                placeholder="Price"
                onBlur={handleBlur}
                value={values.price}
                error={errors.price}
                touched={touched.price}
                onChange={e => setFieldValue('price', e.target.value)}
                disabled={isSubmitting}
              />
            </div>

            <div className="product-form__input-wrap">
              <Input
                isSelect
                getOptionLabel={option => option.displayName}
                options={origins}
                value={values.origin}
                name="origin"
                placeholder="Origins"
                onBlur={handleBlur}
                error={errors.origin && errors.origin.value}
                touched={touched.origin}
                onChange={value => setFieldValue('origin', value)}
                disabled={isSubmitting}
              />
            </div>

            <div className="product-form__btn-wrap">
              <Btn type="submit" label="Submit" onClick={handleSubmit} modificator="main" disabled={isSubmitting} />
              {isEdit && (
                <Btn
                  modificator="stroke"
                  type="button"
                  onClick={() => setValues(initialValue)}
                  label="Reset"
                  disabled={isSubmitting}
                />
              )}
            </div>
          </form>
        )}
      </Formik>
    </Modal>
  );
};

export default ProductForm;
