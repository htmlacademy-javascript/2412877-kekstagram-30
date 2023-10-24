const convertToMinutes = (str) => {

const parts = str.split(':');

if (parts === 0) {

    return 0;
};
    return parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);


};

const checkTime = (begin, end, start, minutes) => {

const beginTime = convertToMinutes(begin);
const endTime = convertToMinutes(end);
const startTime = convertToMinutes(start);

return (beginTime <= startTime && endTime > startTime && (endTime - startTime) >= minutes);


};
