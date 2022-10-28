import { STATUS } from "../../common/status";

export const LoadingIndicator = (props) => {
    if (props.status === STATUS.LOADING) {
        return <span>Загрузка...</span>;
    }
    if (props.status === STATUS.ERROR) {
        return <span>Ошибка: { props.error.message }</span>;
    }

    return props.data;
};
