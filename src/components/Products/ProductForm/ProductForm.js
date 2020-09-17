import React, { useMemo } from 'react';
import { Formik } from 'formik';
import { object, string, number } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { getOriginsSelector, getEditedProductSelector } from '../../../redux/selectors/ProductsSelectors';
import { patchProduct, postProduct } from '../../../redux/operations/ProductsOperations';

import Modal from '../../Modal/Modal';
import Input from '../../Inputs/Input';
import Btn from '../../Inputs/Btn';

const ProductForm = () => {
  const dispatch = useDispatch();
  const origins = useSelector(getOriginsSelector);
  const editedProduct = useSelector(getEditedProductSelector);
  const isEdit = useMemo(() => !!Object.keys(editedProduct).length, [editedProduct]);

  const initialValue = {
    name: isEdit ? editedProduct.name : '',
    price: isEdit ? editedProduct.price : 0,
    origin: isEdit ? origins.filter(origin => origin.value === editedProduct.origin)[0] : origins[0],
  };

  return (
    <Modal title={isEdit ? 'Edit your product' : 'Add product'}>
      <Formik
        initialValues={initialValue}
        validationSchema={object().shape({
          name: string().min(2, 'Enter min 2 letters').max(20, 'Enter max 20 letters').required('Field is required'),
          price: number().moreThan(0, 'Enter price more then 0').required('Field is required'),
          origin: object().shape({
            value: string().required('Field is required'),
            displayName: string().required('Field is required'),
          }),
        })}
        onSubmit={values => {
          const postData = {
            product: {
              name: values.name,
              price: +values.price,
              origin: values.origin.value,
            },
          };

          isEdit ? dispatch(patchProduct(editedProduct.id, postData)) : dispatch(postProduct(postData));
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
