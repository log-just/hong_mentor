# 문제 url
# https://school.programmers.co.kr/learn/courses/20847/lessons/255900?language=python3

def solution(input_string):
    if input_string == '':
        return "N"

    # 문자열에서 등장하는 알파벳을 담는 set
    alpha_set = set(input_string[0])

    # 외톨이를 담는 set
    loner_set = set()
    for i in range(1, len(input_string)):
        # 직전에 등장한 알파벳과 다른 알파벳인데, 알파벳 set 에 이미 존재하면 외톨이라는 뜻
        if input_string[i - 1] != input_string[i] and input_string[i] in alpha_set:
            loner_set.add(input_string[i])

        # set 은 중복 처리가 되므로 loop 를 도는 동안 무조건 담는다.
        alpha_set.add(input_string[i])

    return ''.join(sorted(loner_set)) if len(loner_set) != 0 else "N"
