import styled from 'styled-components';

const InputBlock = styled.div`
    margin-bottom: 10px;

    overflow: hidden;

    label {
        display: block;
        margin-bottom: 7px;
    }
    input, textarea {
        padding: 7px;
        border: 1px solid #333;
        background-color: #111;
        width: 100%;
        color: whitesmoke;
        &:focus {
            border-color: #374;
        }
    }
    textarea {
        min-height: 25px;
        height: 200px;
        resize: vertical;
    }
`;

export default InputBlock;