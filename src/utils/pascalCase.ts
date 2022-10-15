export const toPascalCase = (text: String) => {
    let pascalText = text[0].toLowerCase();
    pascalText += text.substring(1);

    let strArray = pascalText.split(" ");

    return strArray
        .map((word: string, index: number) => {
            if (index === 0) {
                return `${word[0].toLowerCase()}${word.substring(1)}`;
            } else {
                return `${word[0].toUpperCase()}${word.substring(1)}`;
            }
        })
        .join("")
        .replaceAll(/(\*?\(?\)?\%?)/gi, "");
};
