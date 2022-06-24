import { helper } from '@ember/component/helper';
import { get } from '@ember/object';

export default helper(function vGet([model, ...rest]) {
  return get(model, `validations.attrs.${rest.join('.')}`);
});
