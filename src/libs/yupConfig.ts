/* eslint-disable */
import * as Yup from 'yup';

Yup.setLocale({
  mixed: {
    default: 'مقدار اشتباه است',
    required: 'این فیلد الزامی است',
    oneOf: 'مقدار باید از مقادیر معتبر باشد',
    notOneOf: 'مقدار نباید از مقادیر معتبر باشد'
  },
  string: {
    length: 'مقدار باید دقیقاً ${length} کاراکتر باشد',
    min: 'مقدار باید حداقل ${min} کاراکتر باشد',
    max: 'مقدار نباید بیشتر از ${max} کاراکتر باشد',
    email: 'ایمیل نامعتبر است',
    url: 'آدرس اینترنتی نامعتبر است',
    trim: 'مقدار نباید شامل فاصله در ابتدا و انتها باشد',
    lowercase: 'مقدار باید با حروف کوچک نوشته شود',
    uppercase: 'مقدار باید با حروف بزرگ نوشته شود'
  },
  number: {
    min: 'مقدار نباید کمتر از ${min} باشد',
    max: 'مقدار نباید بیشتر از ${max} باشد',
    lessThan: 'مقدار باید کمتر از ${less} باشد',
    moreThan: 'مقدار باید بیشتر از ${more} باشد',
// @ts-ignore
    notEqual: 'مقدار نباید برابر با ${notEqual} باشد',
    positive: 'مقدار باید مثبت باشد',
    negative: 'مقدار باید منفی باشد',
    integer: 'مقدار باید عدد صحیح باشد'
  },
  date: {
    min: 'مقدار باید تاریخی بعد از ${min} باشد',
    max: 'مقدار باید تاریخی قبل از ${max} باشد'
  },
  array: {
    min: 'تعداد مقادیر باید حداقل ${min} عدد باشد',
    max: 'تعداد مقادیر نباید بیشتر از ${max} عدد باشد'
  }
});
