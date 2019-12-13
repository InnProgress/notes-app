import styled from 'styled-components';

const StyledButton = styled.button`
    cursor: pointer;
    padding: 9px 0;
    width: ${props => props.small ? '20%' : '100%'};
    background-color: ${props => {
        if (props.special) return '#374'
        else if (props.danger) return '#621'
        else if (props.active) return '#333'
        else return '#111'
    }};
    border: none;
    border-top: 2px solid black;
    border-radius: 3px;
    color: gainsboro; 

    transition: 0.4s ease;

    ${props => props.mb && `margin-bottom: ${props.mb};`}

    &:hover {
        background-color: ${props => {
            if (props.special) return '#1f4929'
            else if(props.danger) return '#410'
            else return '#191919'
        }};
    }
`;

export default StyledButton;