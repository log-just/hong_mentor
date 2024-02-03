// 문제 url
// https://school.programmers.co.kr/learn/courses/20847/lessons/255900?language=javascript

function solution(input_string) {
    // 문자 & 외톨이 여부(bool) 객체.
    // 첫문자는 비교할 전 문자가 없으므로 미리 넣어둔다
    const charMap = {
        [input_string[0]]: false,
    };

    // 두번째 문자부터 마지막 문자까지 루프
    for (let i = 1; i < input_string.length; i++) {
        const char = input_string[i];
        if (charMap[char] == null) {
            // 처음보는 문자인 경우, 객체에 추가
            charMap[char] = false;
        } else if (input_string[i - 1] !== char) {
            // 이미 있는 문자고 전 문자랑 다른경우 외톨이로 마킹
            charMap[char] = true;
        }
    }

    // 외톨이로 마킹된 문자들을 배열로 추출
    const resultArr = [];
    for (const key in charMap) {
        if (charMap[key] === true) {
            resultArr.push(key);
        }
    }

    // 추출된 문자가 없으면 "N", 있으면 정렬해서 string으로 합쳐서 리턴
    return resultArr.length < 1 ? "N" : resultArr.sort().join("");
}
