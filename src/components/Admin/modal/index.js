import React from 'react';
import { Container } from '../users/styles';
import PropTypes from 'prop-types'

import { Container,Content } from './styles';

const modal = ({Children, size}) => (
<Container>
    <Content size={}>{Children}</Content>
</Container>
)

modal.PropTypes ={
    Children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ]).isRequired,
    size: PropTypes.string
}

modal.defaultProps = {
    size: 'default'
}

export default modal;
