/* eslint-disable radix */
export function toPersianLetterCurrency(
  number: number,
  mode?: "alphabet" | "number",
) {
  let Delimiter = " و ";
  let Zero = "صفر";
  let Letters =
    mode === "number"
      ? [
          ["", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
          ["10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"],
          ["", "", "20", "30", "40", "50", "60", "70", "80", "90"],
          ["", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
          [
            "",
            " 1000",
            " میلیون",
            " میلیارد",
            " بیلیون",
            " بیلیارد",
            " تریلیون",
            " تریلیارد",
            "کوآدریلیون",
            " کادریلیارد",
            " کوینتیلیون",
            " کوانتینیارد",
            " سکستیلیون",
            " سکستیلیارد",
            " سپتیلیون",
            "سپتیلیارد",
            " اکتیلیون",
            " اکتیلیارد",
            " نانیلیون",
            " نانیلیارد",
            " دسیلیون",
            " دسیلیارد",
          ],
        ]
      : [
          ["", "یک", "دو", "سه", "چهار", "پنج", "شش", "هفت", "هشت", "نه"],
          [
            "ده",
            "یازده",
            "دوازده",
            "سیزده",
            "چهارده",
            "پانزده",
            "شانزده",
            "هفده",
            "هجده",
            "نوزده",
            "بیست",
          ],
          [
            "",
            "",
            "بیست",
            "سی",
            "چهل",
            "پنجاه",
            "شصت",
            "هفتاد",
            "هشتاد",
            "نود",
          ],
          [
            "",
            "یکصد",
            "دویست",
            "سیصد",
            "چهارصد",
            "پانصد",
            "ششصد",
            "هفتصد",
            "هشتصد",
            "نهصد",
          ],
          [
            "",
            " هزار",
            " میلیون",
            " میلیارد",
            " بیلیون",
            " بیلیارد",
            " تریلیون",
            " تریلیارد",
            "کوآدریلیون",
            " کادریلیارد",
            " کوینتیلیون",
            " کوانتینیارد",
            " سکستیلیون",
            " سکستیلیارد",
            " سپتیلیون",
            "سپتیلیارد",
            " اکتیلیون",
            " اکتیلیارد",
            " نانیلیون",
            " نانیلیارد",
            " دسیلیون",
            " دسیلیارد",
          ],
        ];
  const rialPart = +number.toString().charAt(number.toString().length - 1);
  const tomanPart = Math.floor(number / 10);
  let PrepareNumber = function PrepareNumber(num: string | number) {
    let Out = num;

    if (typeof Out === "number") {
      Out = Out.toString();
    }

    let NumberLength = Out?.length % 3;

    if (NumberLength === 1) {
      Out = "00".concat(Out);
    } else if (NumberLength === 2) {
      Out = "0".concat(Out);
    } // Explode to array

    return Out?.replace(/\d{3}(?=\d)/g, "$&*").split("*");
  };
  let ThreeNumbersToLetter = function ThreeNumbersToLetter(num: string) {
    // return Zero
    if (parseInt(num, 0) === 0) {
      return "";
    }

    let parsedInt = parseInt(num, 0);

    if (parsedInt < 10) {
      return Letters[0][parsedInt];
    }

    if (parsedInt <= 20) {
      return Letters[1][parsedInt - 10];
    }

    if (parsedInt < 100) {
      let _one = parsedInt % 10;

      let _ten = (parsedInt - _one) / 10;

      if (_one > 0) {
        return Letters[2][_ten] + Delimiter + Letters[0][_one];
      }

      return Letters[2][_ten];
    }

    let one = parsedInt % 10;
    let hundreds = (parsedInt - (parsedInt % 100)) / 100;
    let ten = (parsedInt - (hundreds * 100 + one)) / 10;
    let out = [Letters[3][hundreds]];
    let SecondPart = ten * 10 + one;

    if (SecondPart > 0) {
      if (SecondPart < 10) {
        out.push(Letters[0][SecondPart]);
      } else if (SecondPart <= 20) {
        out.push(Letters[1][SecondPart - 10]);
      } else {
        out.push(Letters[2][ten]);

        if (one > 0) {
          out.push(Letters[0][one]);
        }
      }
    }

    return out.join(Delimiter);
  };

  // return Zero
  if (parseInt(number?.toString(), 0) === 0) {
    return Zero;
  }

  if (number?.toString()?.length > 66) {
    return "خارج از محدوده";
  } // Split to sections

  let SpitedNumber = PrepareNumber(tomanPart); // Fetch Sections and convert

  let Output = [];
  let SplitLength = SpitedNumber?.length;
  if (tomanPart > 0) {
    for (let i = 0; i < SplitLength; i += 1) {
      let SectionTitle = Letters[4][SplitLength - (i + 1)];
      let converted = ThreeNumbersToLetter(SpitedNumber[i]);
      if (converted !== "") {
        Output.push(converted + SectionTitle);
      }
    }
    const lstElement = `${Output.pop()} تومان`;
    Output.push(lstElement);
  }

  if (rialPart > 0) Output.push(`${Letters[0][rialPart]} ریال `);
  return Output.join(Delimiter);
}
