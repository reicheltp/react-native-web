/**
 * Copyright (c) 2017-present, Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

const isDisabled = (props: Object) =>
  props.disabled ||
  (Array.isArray(props.accessibilityStates) &&
    props.accessibilityStates.indexOf('disabled') > -1) ||
  props['aria-disabled'];

export default isDisabled;
