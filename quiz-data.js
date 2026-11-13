const electroCircuitPart1 = [
  {
    questionEn: "Q1. Which type of current remains constant with time?",
    questionAr: "س1. أي نوع من التيار يظل ثابتاً مع مرور الوقت؟",
    optionsEn: { a: "AC", b: "DC", c: "Sinusoidal current", d: "Alternating voltage" },
    optionsAr: { a: "التيار المتردد", b: "التيار المستمر", c: "التيار الجيبي", d: "الجهد المتردد" },
    answer: "b",
    hintEn: "Direct Current (DC) maintains a constant magnitude over time.",
    hintAr: "التيار المستمر (DC) يحافظ على قيمة ثابتة لا تتغير مع الزمن."
  },
  {
    questionEn: "Q2. A common source of DC current is:",
    questionAr: "س2. المصدر الشائع للتيار المستمر هو:",
    optionsEn: { a: "Generator", b: "Battery", c: "Transformer", d: "Capacitor" },
    optionsAr: { a: "المولد", b: "البطارية", c: "المحول", d: "المكثف" },
    answer: "b",
    hintEn: "Batteries store chemical energy and provide steady DC current.",
    hintAr: "البطاريات توفر تياراً مستمراً ثابتاً (DC)."
  },
  {
    questionEn: "Q3. Which type of current changes sinusoidally with time?",
    questionAr: "س3. أي نوع من التيار يتغير بشكل جيبي مع مرور الوقت؟",
    optionsEn: { a: "DC", b: "Constant current", c: "AC", d: "Static current" },
    optionsAr: { a: "التيار المستمر", b: "التيار الثابت", c: "التيار المتردد", d: "التيار الساكن" },
    answer: "c",
    hintEn: "Alternating Current (AC) continuously changes its direction and magnitude in a sine wave.",
    hintAr: "التيار المتردد (AC) يغير اتجاهه وقيمته باستمرار على شكل موجة جيبية."
  },
  {
    questionEn: "Q4. Circuit elements are divided into:",
    questionAr: "س4. تنقسم عناصر الدائرة الكهربائية إلى:",
    optionsEn: { a: "Series and parallel", b: "Active and passive", c: "Linear and nonlinear", d: "Open and closed" },
    optionsAr: { a: "توالي وتوازي", b: "فعالة وغير فعالة", c: "خطية وغير خطية", d: "مفتوحة ومغلقة" },
    answer: "b",
    hintEn: "Elements are generally classified by whether they can generate power (active) or just consume/store it (passive).",
    hintAr: "تُصنف العناصر أساساً إلى فعالة (تولد طاقة) وغير فعالة (تستهلك أو تخزن الطاقة)."
  },
  {
    questionEn: "Q5. Which of the following is an active element?",
    questionAr: "س5. أي مما يلي يعتبر عنصراً فعالاً (نشطاً)؟",
    optionsEn: { a: "Resistor", b: "Capacitor", c: "Battery", d: "Inductor" },
    optionsAr: { a: "المقاومة", b: "المكثف", c: "البطارية", d: "الملف" },
    answer: "c",
    hintEn: "A battery can continuously supply energy to a circuit.",
    hintAr: "البطارية عنصر فعال لأنها قادرة على تزويد الدائرة بالطاقة."
  },
  {
    questionEn: "Q6. Which passive element dissipates energy ideally?",
    questionAr: "س6. أي عنصر غير فعال يستهلك (يبدد) الطاقة بشكل مثالي؟",
    optionsEn: { a: "Capacitor", b: "Inductor", c: "Resistor", d: "Transformer" },
    optionsAr: { a: "المكثف", b: "الملف", c: "المقاومة", d: "المحول" },
    answer: "c",
    hintEn: "Resistors dissipate electrical energy in the form of heat.",
    hintAr: "المقاومة هي العنصر الذي يستهلك الطاقة الكهربائية ويحولها إلى حرارة."
  },
  {
    questionEn: "Q7. A dependent source is represented by a:",
    questionAr: "س7. يُمثَّل المصدر المعتمد بـ:",
    optionsEn: { a: "Circle", b: "Square", c: "Triangle", d: "Diamond" },
    optionsAr: { a: "دائرة", b: "مربع", c: "مثلث", d: "معين (شكل الماسة)" },
    answer: "d",
    hintEn: "Independent sources are circles, while dependent sources are drawn as diamond shapes.",
    hintAr: "المصادر المستقلة ترسم كدوائر، بينما المصادر المعتمدة ترسم كمعين."
  },
  {
    questionEn: "Q8. Ohm's Law states that voltage is proportional to:",
    questionAr: "س8. ينص قانون أوم على أن الجهد يتناسب مع:",
    optionsEn: { a: "Resistance", b: "Power", c: "Current", d: "Energy" },
    optionsAr: { a: "المقاومة", b: "القدرة", c: "التيار", d: "الطاقة" },
    answer: "c",
    hintEn: "V = I × R, meaning Voltage is directly proportional to Current.",
    hintAr: "حسب قانون أوم (V = I × R)، الجهد يتناسب طردياً مع التيار."
  },
  {
    questionEn: "Q9. The unit of resistance is:",
    questionAr: "س9. وحدة قياس المقاومة هي:",
    optionsEn: { a: "Volt", b: "Ampere", c: "Ohm", d: "Watt" },
    optionsAr: { a: "فولت", b: "أمبير", c: "أوم", d: "وات" },
    answer: "c",
    hintEn: "Resistance is measured in Ohms (Ω).",
    hintAr: "تُقاس المقاومة بوحدة الأوم (Ω)."
  },
  {
    questionEn: "Q10. Increasing resistance causes current to:",
    questionAr: "س10. زيادة المقاومة تؤدي إلى أن التيار:",
    optionsEn: { a: "Increase", b: "Decrease", c: "Remain constant", d: "Double" },
    optionsAr: { a: "يزداد", b: "يقل", c: "يبقى ثابتاً", d: "يتضاعف" },
    answer: "b",
    hintEn: "Because I = V/R, a higher resistance results in a lower current.",
    hintAr: "بما أن التيار يساوي الجهد مقسوماً على المقاومة، فزيادة المقاومة تقلل التيار."
  },
  {
    questionEn: "Q11. The property that resists the flow of electricity is called:",
    questionAr: "س11. الخاصية التي تقاوم تدفق الكهرباء تسمى:",
    optionsEn: { a: "Conductance", b: "Voltage", c: "Resistance", d: "Power" },
    optionsAr: { a: "الموصلية", b: "الجهد", c: "المقاومة", d: "القدرة" },
    answer: "c",
    hintEn: "Resistance is the opposition to current flow.",
    hintAr: "المقاومة هي الممانعة التي يلقاها التيار أثناء مروره في الموصل."
  },
  {
    questionEn: "Q12. A short circuit has:",
    questionAr: "س12. دائرة القصر (Short circuit) تمتلك:",
    optionsEn: { a: "Infinite resistance", b: "High resistance", c: "Zero or very low resistance", d: "Medium resistance" },
    optionsAr: { a: "مقاومة لانهائية", b: "مقاومة عالية", c: "مقاومة صفرية أو منخفضة جداً", d: "مقاومة متوسطة" },
    answer: "c",
    hintEn: "A short circuit provides an easy path for current, meaning resistance is near zero.",
    hintAr: "دائرة القصر توفر مساراً سهلاً جداً للتيار، مما يعني أن مقاومتها تقترب من الصفر."
  },
  {
    questionEn: "Q13. In an open circuit, the current is:",
    questionAr: "س13. في الدائرة المفتوحة، يكون التيار:",
    optionsEn: { a: "Infinite", b: "Zero", c: "Maximum", d: "Alternating" },
    optionsAr: { a: "لانهائي", b: "صفر", c: "أقصى ما يمكن", d: "متردد" },
    answer: "b",
    hintEn: "Current cannot flow through an incomplete or open path.",
    hintAr: "لا يمكن للتيار أن يمر في مسار غير مكتمل (مفتوح)، لذلك يكون صفراً."
  },
  {
    questionEn: "Q14. Power dissipated in a resistor is always:",
    questionAr: "س14. الطاقة المبددة في المقاومة تكون دائماً:",
    optionsEn: { a: "Negative", b: "Positive", c: "Zero", d: "Alternating" },
    optionsAr: { a: "سالبة", b: "موجبة", c: "صفر", d: "مترددة" },
    answer: "b",
    hintEn: "Resistors only consume power (P = I²R), so the dissipated power is always positive.",
    hintAr: "المقاومات تستهلك الطاقة فقط ولا تنتجها، لذا فالطاقة المبددة فيها موجبة دائماً."
  },
  {
    questionEn: "Q15. A node is a point where:",
    questionAr: "س15. العقدة (Node) هي نقطة حيث:",
    optionsEn: { a: "Voltage becomes zero", b: "Two or more branches connect", c: "Current stops", d: "Resistance increases" },
    optionsAr: { a: "يصبح الجهد صفراً", b: "يتصل فيها فرعان أو أكثر", c: "يتوقف التيار", d: "تزداد المقاومة" },
    answer: "b",
    hintEn: "A node is a connection point between two or more circuit elements.",
    hintAr: "العقدة هي نقطة التقاء بين عنصرين أو أكثر في الدائرة."
  },
  {
    questionEn: "Q16. Kirchhoff's Current Law is based on conservation of:",
    questionAr: "س16. يعتمد قانون كيرشوف للتيار (KCL) على مبدأ حفظ:",
    optionsEn: { a: "Energy", b: "Voltage", c: "Charge", d: "Resistance" },
    optionsAr: { a: "الطاقة", b: "الجهد", c: "الشحنة", d: "المقاومة" },
    answer: "c",
    hintEn: "KCL states that charge cannot be created or destroyed at a node.",
    hintAr: "ينص القانون على أن مجموع الشحنات الداخلة لعقدة يساوي الخارجة منها (حفظ الشحنة)."
  },
  {
    questionEn: "Q17. Kirchhoff's Voltage Law is based on conservation of:",
    questionAr: "س17. يعتمد قانون كيرشوف للجهد (KVL) على مبدأ حفظ:",
    optionsEn: { a: "Charge", b: "Current", c: "Energy", d: "Resistance" },
    optionsAr: { a: "الشحنة", b: "التيار", c: "الطاقة", d: "المقاومة" },
    answer: "c",
    hintEn: "KVL is based on the principle that the total energy gained and lost in a loop is zero.",
    hintAr: "يعتمد القانون على أن مجموع الطاقة المكتسبة والمفقودة في حلقة مغلقة يساوي صفراً (حفظ الطاقة)."
  },
  {
    questionEn: "Q18. Resistors are in series when they have the same:",
    questionAr: "س18. تكون المقاومات على التوالي عندما يمر بها نفس:",
    optionsEn: { a: "Voltage", b: "Resistance", c: "Current", d: "Power" },
    optionsAr: { a: "الجهد", b: "المقاومة", c: "التيار", d: "القدرة" },
    answer: "c",
    hintEn: "In a series circuit, there is only one path for the current.",
    hintAr: "في دائرة التوالي، يوجد مسار واحد فقط، لذا يمر نفس التيار في جميع العناصر."
  },
  {
    questionEn: "Q19. In parallel resistors, the voltage across them is:",
    questionAr: "س19. في المقاومات المتصلة على التوازي، يكون الجهد عبرها:",
    optionsEn: { a: "Different", b: "Zero", c: "Infinite", d: "The same" },
    optionsAr: { a: "مختلفاً", b: "صفراً", c: "لانهائياً", d: "متشابهاً (نفس الجهد)" },
    answer: "d",
    hintEn: "Elements in parallel share the same two nodes, hence they have the same voltage.",
    hintAr: "العناصر على التوازي تشترك في نفس العقدتين، لذا يكون الجهد عليها متساوياً."
  },
  {
    questionEn: "Q20. Wye-Delta transformations are used to:",
    questionAr: "س20. تُستخدم تحويلات ستار-دلتا (Wye-Delta) من أجل:",
    optionsEn: { a: "Increase voltage", b: "Simplify circuits", c: "Measure power", d: "Generate current" },
    optionsAr: { a: "زيادة الجهد", b: "تبسيط الدوائر", c: "قياس القدرة", d: "توليد التيار" },
    answer: "b",
    hintEn: "It's a mathematical technique to simplify complex resistor networks.",
    hintAr: "تُستخدم كتقنية رياضية لتبسيط شبكات المقاومات المعقدة التي لا تكون توالي ولا توازي."
  },
  {
    questionEn: "Q21. An open circuit has:",
    questionAr: "س21. الدائرة المفتوحة تمتلك:",
    optionsEn: { a: "Infinite resistance", b: "Zero resistance", c: "A resistance equal to the source resistance", d: "A resistance equal to the load resistance" },
    optionsAr: { a: "مقاومة لانهائية", b: "مقاومة صفرية", c: "مقاومة تساوي مقاومة المصدر", d: "مقاومة تساوي مقاومة الحمل" },
    answer: "a",
    hintEn: "Since no current flows, the resistance is theoretically infinite.",
    hintAr: "بما أن التيار لا يمر أبداً، تُعتبر المقاومة لانهائية لعدم وجود اتصال."
  },
  {
    questionEn: "Q22. In a series circuit, the current through each resistor is:",
    questionAr: "س22. في دائرة التوالي، يكون التيار المار في كل مقاومة:",
    optionsEn: { a: "The same", b: "Different", c: "Zero", d: "Infinite" },
    optionsAr: { a: "هو نفسه", b: "مختلفاً", c: "صفراً", d: "لانهائياً" },
    answer: "a",
    hintEn: "Current has only one path in a series circuit.",
    hintAr: "نظراً لوجود مسار واحد فقط، فإن التيار لا يتجزأ."
  },
  {
    questionEn: "Q23. A loop is defined as:",
    questionAr: "س23. تُعرّف الحلقة (Loop) بأنها:",
    optionsEn: { a: "A closed path where no node is passed more than once", b: "A path that contains at least one resistor", c: "A set of branches connected in parallel", d: "A closed path that contains no other loops" },
    optionsAr: { a: "مسار مغلق لا يتم فيه المرور على أي عقدة أكثر من مرة", b: "مسار يحتوي على مقاومة واحدة على الأقل", c: "مجموعة من الفروع المتصلة على التوازي", d: "مسار مغلق لا يحتوي على حلقات أخرى" },
    answer: "a",
    hintEn: "A loop is simply any closed path in a circuit without repeating nodes.",
    hintAr: "الحلقة هي أي مسار مغلق تبدأ وتنتهي فيه عند نفس النقطة دون تكرار المرور بعقدة أخرى."
  },
  {
    questionEn: "Q24. For N resistors connected in series, the equivalent resistance is:",
    questionAr: "س24. لعدد N من المقاومات المتصلة على التوالي، تكون المقاومة المكافئة:",
    optionsEn: { a: "The sum of the individual resistances", b: "The reciprocal of the sum of the reciprocals", c: "The average of the resistances", d: "The product of the resistance" },
    optionsAr: { a: "مجموع المقاومات الفردية", b: "مقلوب مجموع المقلوبات", c: "متوسط المقاومات", d: "حاصل ضرب المقاومات" },
    answer: "a",
    hintEn: "Req = R1 + R2 + ... + Rn for series circuits.",
    hintAr: "المقاومة المكافئة في التوالي هي ببساطة الجمع الجبري للمقاومات (Req = R1 + R2 + ...)."
  },
  {
    questionEn: "Q25. Mains power in a household is an example of:",
    questionAr: "س25. الكهرباء الرئيسية في المنازل هي مثال على:",
    optionsEn: { a: "Direct Current", b: "Alternating Current", c: "Constant current", d: "Battery current" },
    optionsAr: { a: "التيار المستمر", b: "التيار المتردد", c: "التيار الثابت", d: "تيار البطارية" },
    answer: "b",
    hintEn: "Household power grids supply Alternating Current (AC).",
    hintAr: "شبكات الكهرباء المنزلية تعتمد على التيار المتردد (AC)."
  },
  {
    questionEn: "Q26. Ohm's law states that the voltage across a resistor is:",
    questionAr: "س26. ينص قانون أوم على أن الجهد عبر المقاومة يكون:",
    optionsEn: { a: "Inversely proportional to the current through it", b: "Directly proportional to the current through it", c: "Independent of the current through it", d: "Proportional to the square of the current through it" },
    optionsAr: { a: "متناسباً عكسياً مع التيار المار بها", b: "متناسباً طردياً مع التيار المار بها", c: "مستقلاً عن التيار المار بها", d: "متناسباً مع مربع التيار المار بها" },
    answer: "b",
    hintEn: "V = IR, so voltage directly increases as current increases.",
    hintAr: "الجهد يساوي التيار في المقاومة، لذا فالعلاقة بينهما طردية."
  },
  {
    questionEn: "Q27. The resistance of an object depends on which factors?",
    questionAr: "س27. تعتمد مقاومة أي جسم على أي من العوامل التالية؟",
    optionsEn: { a: "Length and cross-sectional area only", b: "Material resistivity, length, and cross-sectional area", c: "Voltage and current only", d: "Temperature and time only" },
    optionsAr: { a: "الطول ومساحة المقطع العرضي فقط", b: "مقاومية المادة، الطول، ومساحة المقطع العرضي", c: "الجهد والتيار فقط", d: "درجة الحرارة والزمن فقط" },
    answer: "b",
    hintEn: "R = ρ(L/A), where ρ is resistivity, L is length, and A is area.",
    hintAr: "المقاومة تعتمد على نوع المادة (ρ)، طول الموصل (L)، ومساحة مقطعه (A)."
  },
  {
    questionEn: "Q28. A short circuit has:",
    questionAr: "س28. دائرة القصر تمتلك:",
    optionsEn: { a: "Infinite resistance", b: "Zero resistance", c: "A resistance equal to the source resistance", d: "A resistance equal to the load resistance" },
    optionsAr: { a: "مقاومة لانهائية", b: "مقاومة صفرية", c: "مقاومة تساوي مقاومة المصدر", d: "مقاومة تساوي مقاومة الحمل" },
    answer: "b",
    hintEn: "A perfect short circuit ideally has zero Ohms.",
    hintAr: "الدائرة القصيرة المثالية لا تحتوي على أي مقاومة تعيق التيار (صفر أوم)."
  },
  {
    questionEn: "Q29. The principle of voltage division applies to:",
    questionAr: "س29. يُطبق مبدأ مقسم الجهد (Voltage division) على:",
    optionsEn: { a: "Resistors in parallel", b: "Resistors in series", c: "Resistors in any configuration", d: "Dependent sources only" },
    optionsAr: { a: "المقاومات على التوازي", b: "المقاومات على التوالي", c: "المقاومات في أي تشكيل", d: "المصادر المعتمدة فقط" },
    answer: "b",
    hintEn: "Voltage divides across elements that are connected in series.",
    hintAr: "الجهد يتجزأ فقط على العناصر المتصلة معاً على التوالي."
  },
  {
    questionEn: "Q30. The principle of current division applies to:",
    questionAr: "س30. يُطبق مبدأ مقسم التيار (Current division) على:",
    optionsEn: { a: "Resistors in series", b: "Resistors in parallel", c: "Resistors in a delta configuration", d: "Resistors in a wye configuration" },
    optionsAr: { a: "المقاومات على التوالي", b: "المقاومات على التوازي", c: "المقاومات في تشكيل دلتا", d: "المقاومات في تشكيل ستار" },
    answer: "b",
    hintEn: "Current divides among elements that are connected in parallel.",
    hintAr: "التيار يتجزأ عندما يتفرع المسار، أي في حالة التوصيل على التوازي."
  }
];

const electroCircuitPart2 = [
  {
    questionEn: "Q31. What type of current is supplied by a common battery?",
    questionAr: "س31. ما نوع التيار الذي توفره البطارية العادية؟",
    optionsEn: { a: "Alternating Current", b: "Sinusoidal Current", c: "Direct Current", d: "Pulsating Current" },
    optionsAr: { a: "تيار متردد", b: "تيار جيبي", c: "تيار مستمر", d: "تيار نبضي" },
    answer: "c",
    hintEn: "Batteries produce a steady, one-directional current (DC).",
    hintAr: "البطاريات تمد الدائرة بتيار ثابت الاتجاه والقيمة (DC)."
  },
  {
    questionEn: "Q32. Which of the following passive elements ideally dissipates energy?",
    questionAr: "س32. أي من العناصر غير الفعالة التالية يستهلك الطاقة بشكل مثالي؟",
    optionsEn: { a: "Inductor", b: "Capacitor", c: "Resistor", d: "All of the above" },
    optionsAr: { a: "الملف", b: "المكثف", c: "المقاومة", d: "جميع ما سبق" },
    answer: "c",
    hintEn: "Only resistors dissipate energy as heat; capacitors and inductors store it.",
    hintAr: "المقاومة فقط هي من تستهلك الطاقة، بينما المكثف والملف يقومان بتخزينها."
  },
  {
    questionEn: "Q33. Which of the following passive elements does NOT dissipate energy (ideally)?",
    questionAr: "س33. أي من العناصر غير الفعالة التالية لا يستهلك الطاقة (بشكل مثالي)؟",
    optionsEn: { a: "Resistor", b: "Inductor", c: "Both inductor and capacitor", d: "Neither inductor nor capacitor" },
    optionsAr: { a: "المقاومة", b: "الملف", c: "كلا من الملف والمكثف", d: "لا الملف ولا المكثف" },
    answer: "c",
    hintEn: "Ideal inductors and capacitors only store energy, they do not dissipate it.",
    hintAr: "الملفات والمكثفات المثالية تخزن الطاقة ولا تستهلكها (تبددها)."
  },
  {
    questionEn: "Q34. The unit of resistance is:",
    questionAr: "س34. وحدة المقاومة هي:",
    optionsEn: { a: "Volt (V)", b: "Ampere (A)", c: "Ohm (Ω)", d: "Watt (W)" },
    optionsAr: { a: "فولت", b: "أمبير", c: "أوم", d: "وات" },
    answer: "c",
    hintEn: "Resistance is measured in Ohms.",
    hintAr: "تقاس المقاومة بوحدة الأوم (Ω)."
  },
  {
    questionEn: "Q35. Which of the following is an example of an active circuit element?",
    questionAr: "س35. أي مما يلي هو مثال على عنصر فعال في الدائرة؟",
    optionsEn: { a: "Resistor", b: "Capacitor", c: "Inductor", d: "Battery" },
    optionsAr: { a: "المقاومة", b: "المكثف", c: "الملف", d: "البطارية" },
    answer: "d",
    hintEn: "Batteries can provide power to the circuit.",
    hintAr: "البطارية تعتبر مصدر طاقة لذا فهي عنصر فعال."
  },
  {
    questionEn: "Q36. Nodal analysis mainly focuses on:",
    questionAr: "س36. يركز تحليل العقد (Nodal analysis) بشكل أساسي على:",
    optionsEn: { a: "Branch currents", b: "Node voltages", c: "Power dissipation", d: "Resistance only" },
    optionsAr: { a: "تيارات الفروع", b: "جهود العقد", c: "تبديد القدرة", d: "المقاومة فقط" },
    answer: "b",
    hintEn: "Nodal analysis aims to find the voltage at each node relative to the reference.",
    hintAr: "الهدف الرئيسي لتحليل العقد هو إيجاد قيمة الجهد عند كل عقدة."
  },
  {
    questionEn: "Q37. In nodal analysis, the reference node is usually called:",
    questionAr: "س37. في تحليل العقد، تُسمى العقدة المرجعية عادةً بـ:",
    optionsEn: { a: "Source node", b: "Loop node", c: "Ground", d: "Active node" },
    optionsAr: { a: "عقدة المصدر", b: "عقدة الحلقة", c: "الأرضي (Ground)", d: "العقدة الفعالة" },
    answer: "c",
    hintEn: "The reference node is commonly referred to as the ground.",
    hintAr: "العقدة المرجعية هي الأرضي، وهي النقطة التي نقيس بالنسبة لها."
  },
  {
    questionEn: "Q38. The voltage of the reference node is normally:",
    questionAr: "س38. يكون جهد العقدة المرجعية عادةً:",
    optionsEn: { a: "1 V", b: "Infinite", c: "Zero", d: "Negative" },
    optionsAr: { a: "1 فولت", b: "لانهائي", c: "صفر", d: "سالب" },
    answer: "c",
    hintEn: "Ground is assigned a potential of 0 Volts.",
    hintAr: "جهد الأرضي (المرجعي) يساوي صفراً دائماً في التحليل."
  },
  {
    questionEn: "Q39. Which law is applied in nodal analysis?",
    questionAr: "س39. أي قانون يُطبق في تحليل العقد؟",
    optionsEn: { a: "Ohm's Law only", b: "KVL", c: "KCL", d: "Faraday's Law" },
    optionsAr: { a: "قانون أوم فقط", b: "قانون كيرشوف للجهد", c: "قانون كيرشوف للتيار (KCL)", d: "قانون فاراداي" },
    answer: "c",
    hintEn: "Nodal analysis uses KCL to sum the currents leaving each node.",
    hintAr: "تحليل العقد يستخدم قانون كيرشوف للتيار (KCL) عند كل عقدة غير مرجعية."
  },
  {
    questionEn: "Q40. In nodal analysis, branch currents are expressed using:",
    questionAr: "س40. في تحليل العقد، يتم التعبير عن تيارات الفروع باستخدام:",
    optionsEn: { a: "Kirchhoff's Voltage Law", b: "Ohm's Law", c: "Power Law", d: "Ampere's Law" },
    optionsAr: { a: "قانون كيرشوف للجهد", b: "قانون أوم", c: "قانون القدرة", d: "قانون أمبير" },
    answer: "b",
    hintEn: "Branch currents are written as (V1 - V2)/R based on Ohm's Law.",
    hintAr: "تُكتب التيارات بدلالة الجهود والمقاومة بناءً على قانون أوم (I = V/R)."
  },
  {
    questionEn: "Q41. Current flows from:",
    questionAr: "س41. يتدفق التيار من:",
    optionsEn: { a: "Low potential to high potential", b: "Equal potential", c: "High potential to low potential", d: "Ground to source" },
    optionsAr: { a: "الجهد المنخفض إلى الجهد العالي", b: "جهد متساوٍ", c: "الجهد العالي إلى الجهد المنخفض", d: "الأرضي إلى المصدر" },
    answer: "c",
    hintEn: "Conventional current always flows from higher to lower electrical potential.",
    hintAr: "التيار الاصطلاحي يتدفق دائماً من النقطة ذات الجهد الأعلى إلى النقطة ذات الجهد الأقل."
  },
  {
    questionEn: "Q42. A circuit with n nodes has how many node-voltage equations?",
    questionAr: "س42. دائرة تحتوي على (n) من العقد، كم عدد معادلات جهد العقدة فيها؟",
    optionsEn: { a: "n", b: "n + 1", c: "n-1", d: "2n" },
    optionsAr: { a: "n", b: "n + 1", c: "n-1", d: "2n" },
    answer: "c",
    hintEn: "One node is the reference (ground), leaving n-1 independent equations.",
    hintAr: "بما أن هناك عقدة واحدة مرجعية (جهدها صفر)، يتبقى n-1 من المعادلات لحلها."
  },
  {
    questionEn: "Q43. Mesh analysis uses:",
    questionAr: "س43. تحليل الحلقات (Mesh analysis) يستخدم:",
    optionsEn: { a: "KCL", b: "KVL", c: "Ohm's Law only", d: "N/A" },
    optionsAr: { a: "قانون كيرشوف للتيار", b: "قانون كيرشوف للجهد (KVL)", c: "قانون أوم فقط", d: "غير متوفر" },
    answer: "b",
    hintEn: "Mesh analysis is based on Kirchhoff's Voltage Law (KVL) around closed loops.",
    hintAr: "تحليل الحلقات يعتمد على تطبيق قانون كيرشوف للجهد في كل مسار مغلق."
  },
  {
    questionEn: "Q44. A mesh is defined as:",
    questionAr: "س44. تُعرَّف الحلقة (Mesh) بأنها:",
    optionsEn: { a: "Any open path", b: "A loop containing another loop", c: "A loop with no other loop inside it", d: "A branch with resistance" },
    optionsAr: { a: "أي مسار مفتوح", b: "حلقة تحتوي على حلقة أخرى", c: "حلقة لا تحتوي على أي حلقة أخرى بداخلها", d: "فرع به مقاومة" },
    answer: "c",
    hintEn: "A mesh is the most basic loop that cannot be subdivided further.",
    hintAr: "الميش (Mesh) هي أصغر حلقة مغلقة في الدائرة ولا يتخللها حلقات أخرى."
  },
  {
    questionEn: "Q45. A loop is:",
    questionAr: "س45. الحلقة (Loop) هي:",
    optionsEn: { a: "An open path", b: "A closed path", c: "A current source", d: "A voltage source" },
    optionsAr: { a: "مسار مفتوح", b: "مسار مغلق", c: "مصدر تيار", d: "مصدر جهد" },
    answer: "b",
    hintEn: "Any path that starts and ends at the same node is a loop.",
    hintAr: "الحلقة هي أي مسار مغلق للتيار الكهربائي في الدائرة."
  },
  {
    questionEn: "Q46. Mesh analysis is mainly used to determine unknown:",
    questionAr: "س46. يُستخدم تحليل الحلقات (Mesh analysis) بشكل أساسي لتحديد:",
    optionsEn: { a: "Voltages", b: "Resistances", c: "Currents", d: "Powers" },
    optionsAr: { a: "الجهود المجهولة", b: "المقاومات المجهولة", c: "التيارات المجهولة", d: "القدرات المجهولة" },
    answer: "c",
    hintEn: "It calculates the hypothetical mesh currents to find actual branch currents.",
    hintAr: "الهدف الرئيسي لتحليل الحلقات هو إيجاد التيارات المارة في الدائرة."
  },
  {
    questionEn: "Q47. Mesh analysis can only be applied to:",
    questionAr: "س47. يمكن تطبيق تحليل الحلقات (Mesh analysis) فقط على:",
    optionsEn: { a: "AC circuits only", b: "Non-planar circuits", c: "Planar circuits", d: "Digital circuits" },
    optionsAr: { a: "دوائر التيار المتردد فقط", b: "الدوائر غير المستوية", c: "الدوائر المستوية (Planar)", d: "الدوائر الرقمية" },
    answer: "c",
    hintEn: "Mesh analysis works only for planar circuits (drawn on a flat surface without crossing branches).",
    hintAr: "يُطبق فقط على الدوائر المستوية التي يمكن رسمها دون تقاطع الأسلاك."
  },
  {
    questionEn: "Q48. A planar circuit is a circuit that:",
    questionAr: "س48. الدائرة المستوية (Planar circuit) هي الدائرة التي:",
    optionsEn: { a: "Contains capacitors only", b: "Has no crossing branches", c: "Has infinite resistance", d: "Contains one loop only" },
    optionsAr: { a: "تحتوي على مكثفات فقط", b: "لا تحتوي على فروع متقاطعة", c: "لها مقاومة لانهائية", d: "تحتوي على حلقة واحدة فقط" },
    answer: "b",
    hintEn: "Planar means it can be drawn on a 2D plane without any wires crossing over each other.",
    hintAr: "هي الدائرة التي يمكن رسمها على ورقة دون أن يتقاطع فرعان مع بعضهما."
  },
  {
    questionEn: "Q49. The first step in mesh analysis is to:",
    questionAr: "س49. الخطوة الأولى في تحليل الحلقات هي:",
    optionsEn: { a: "Apply KVL", b: "Find node voltages", c: "Assign mesh currents", d: "Calculate power" },
    optionsAr: { a: "تطبيق قانون KVL", b: "إيجاد جهود العقد", c: "تعيين تيارات الحلقات", d: "حساب القدرة" },
    answer: "c",
    hintEn: "Before writing equations, you must assign a current variable (i1, i2, etc.) to each mesh.",
    hintAr: "قبل بدء الحل، يجب افتراض اتجاه وتسمية تيار لكل حلقة مغلقة."
  },
  {
    questionEn: "Q50. The final step in nodal analysis is to:",
    questionAr: "س50. الخطوة الأخيرة في تحليل العقد هي:",
    optionsEn: { a: "Draw the circuit", b: "Solve simultaneous equations", c: "Remove the ground node", d: "Calculate resistance only" },
    optionsAr: { a: "رسم الدائرة", b: "حل المعادلات الآنية", c: "إزالة عقدة الأرضي", d: "حساب المقاومة فقط" },
    answer: "b",
    hintEn: "After applying KCL, you solve the resulting mathematical equations to find the voltages.",
    hintAr: "بعد استخراج المعادلات، الخطوة الأخيرة هي حلها رياضياً للحصول على قيم الجهود."
  },
  {
    questionEn: "Q51. In mesh analysis, equations are obtained by applying:",
    questionAr: "س51. في تحليل الحلقات، يتم الحصول على المعادلات بتطبيق:",
    optionsEn: { a: "KCL around meshes", b: "KVL around meshes", c: "Ohm's law only", d: "Current division" },
    optionsAr: { a: "قانون KCL حول الحلقات", b: "قانون KVL حول الحلقات", c: "قانون أوم فقط", d: "مقسم التيار" },
    answer: "b",
    hintEn: "Kirchhoff's Voltage Law (KVL) is the core principle used to write mesh equations.",
    hintAr: "يتم استخدام قانون كيرشوف للجهد (المجموع الجبري للجهود = صفر) في كل حلقة."
  },
  {
    questionEn: "Q52. Which of the following is NOT required in nodal analysis?",
    questionAr: "س52. أي مما يلي غير مطلوب في تحليل العقد؟",
    optionsEn: { a: "Reference node", b: "KCL", c: "Ohm's Law", d: "Voltage division rule only" },
    optionsAr: { a: "عقدة مرجعية", b: "قانون KCL", c: "قانون أوم", d: "قاعدة مقسم الجهد فقط" },
    answer: "d",
    hintEn: "Nodal analysis uses KCL, Ohm's law, and a reference node. Voltage division isn't a core step.",
    hintAr: "تحليل العقد لا يعتمد على قاعدة مقسم الجهد كخطوة رئيسية فيه."
  },
  {
    questionEn: "Q53. The outer loop in a circuit may not be considered a mesh because:",
    questionAr: "س53. الحلقة الخارجية في الدائرة قد لا تُعتبر (Mesh) لأنها:",
    optionsEn: { a: "It contains another loop inside it", b: "It has no voltage source", c: "It is an open path", d: "It contains no resistance" },
    optionsAr: { a: "تحتوي على حلقة أخرى بداخلها", b: "لا تحتوي على مصدر جهد", c: "مسار مفتوح", d: "لا تحتوي على مقاومة" },
    answer: "a",
    hintEn: "By definition, a mesh cannot have any internal loops.",
    hintAr: "الميش هي حلقة لا تحتوي على حلقات أخرى، لذا الحلقة الكبرى لا تُعد ميش."
  },
  {
    questionEn: "Q54. The number of mesh equations equals the number of:",
    questionAr: "س54. عدد معادلات الحلقات يساوي عدد:",
    optionsEn: { a: "Nodes", b: "Sources", c: "Meshes", d: "Branches" },
    optionsAr: { a: "العقد", b: "المصادر", c: "الحلقات (Meshes)", d: "الفروع" },
    answer: "c",
    hintEn: "Each mesh gives exactly one KVL equation.",
    hintAr: "لكل ميش (حلقة فرعية) نكتب معادلة واحدة، فعدد المعادلات يساوي عدد الحلقات."
  },
  {
    questionEn: "Q55. Which analysis method reduces the number of simultaneous equations by focusing on node voltages?",
    questionAr: "س55. أي طريقة تحليل تقلل عدد المعادلات الآنية بالتركيز على جهود العقد؟",
    optionsEn: { a: "Mesh analysis", b: "Nodal analysis", c: "Current division", d: "Delta transformation" },
    optionsAr: { a: "تحليل الحلقات", b: "تحليل العقد (Nodal analysis)", c: "مقسم التيار", d: "تحويلات دلتا" },
    answer: "b",
    hintEn: "Nodal analysis minimizes variables by assigning node voltages.",
    hintAr: "تحليل العقد يختزل المجاهيل إلى جهود العقد بدلاً من تيارات كل الفروع."
  },
  {
    questionEn: "Q56. Nodal analysis is based on applying which law to non-reference nodes?",
    questionAr: "س56. يعتمد تحليل العقد على تطبيق أي قانون على العقد غير المرجعية؟",
    optionsEn: { a: "Kirchhoff's Voltage Law (KVL)", b: "Kirchhoff's Current Law (KCL)", c: "Ohm's Law", d: "The law of conservation of energy" },
    optionsAr: { a: "قانون KVL", b: "قانون كيرشوف للتيار (KCL)", c: "قانون أوم", d: "قانون حفظ الطاقة" },
    answer: "b",
    hintEn: "At each non-reference node, you sum the currents to zero using KCL.",
    hintAr: "يتم تطبيق KCL لجمع التيارات الداخلة والخارجة عند كل عقدة لمعرفة جهدها."
  },
  {
    questionEn: "Q57. Mesh analysis is based on applying which law to each mesh?",
    questionAr: "س57. يعتمد تحليل الحلقات على تطبيق أي قانون على كل حلقة؟",
    optionsEn: { a: "Kirchhoff's Current Law (KCL)", b: "Kirchhoff's Voltage Law (KVL)", c: "Ohm's Law", d: "All the above" },
    optionsAr: { a: "قانون KCL", b: "قانون كيرشوف للجهد (KVL)", c: "قانون أوم", d: "جميع ما سبق" },
    answer: "b",
    hintEn: "Mesh analysis always utilizes KVL around closed loops.",
    hintAr: "يعتمد تحليل الحلقات بشكل أساسي على KVL لموازنة الجهود."
  },
  {
    questionEn: "Q58. In nodal analysis, the reference node is typically:",
    questionAr: "س58. في تحليل العقد، العقدة المرجعية عادة ما تكون:",
    optionsEn: { a: "The node with the highest voltage", b: "The node with the lowest voltage", c: "Ground (0 V)", d: "Any node connected to a dependent source" },
    optionsAr: { a: "العقدة ذات الجهد الأعلى", b: "العقدة ذات الجهد الأقل", c: "الأرضي (0 فولت)", d: "أي عقدة متصلة بمصدر معتمد" },
    answer: "c",
    hintEn: "The reference node is commonly defined as the ground, having 0 volts.",
    hintAr: "تُحدد العقدة المرجعية كأرضي ليصبح جهدها صفراً لتسهيل الحسابات."
  },
  {
    questionEn: "Q59. Which of the following is NOT a type of dependent source?",
    questionAr: "س59. أي مما يلي لا يعتبر نوعاً من أنواع المصادر المعتمدة؟",
    optionsEn: { a: "Voltage-controlled voltage source (VCVS)", b: "Current-controlled voltage source (CCVS)", c: "Voltage-controlled current source (VCCS)", d: "Voltage-controlled resistance source (VCRS)" },
    optionsAr: { a: "مصدر جهد محكوم بجهد (VCVS)", b: "مصدر جهد محكوم بتيار (CCVS)", c: "مصدر تيار محكوم بجهد (VCCS)", d: "مصدر مقاومة محكوم بجهد (VCRS)" },
    answer: "d",
    hintEn: "Dependent sources control voltage or current, not resistance.",
    hintAr: "المصادر المعتمدة تتحكم إما في الجهد أو التيار، ولا يوجد مصدر مقاومة معتمد."
  },
  {
    questionEn: "Q60. Which of the following is an example of a dependent source?",
    questionAr: "س60. أي مما يلي يمثل مثالاً على مصدر معتمد؟",
    optionsEn: { a: "A battery", b: "A generator", c: "A current source controlled by another current", d: "A plain resistor" },
    optionsAr: { a: "بطارية", b: "مولد", c: "مصدر تيار يتحكم فيه تيار آخر", d: "مقاومة عادية" },
    answer: "c",
    hintEn: "Dependent sources are controlled by another voltage or current in the circuit.",
    hintAr: "المصادر المعتمدة تعتمد على جهد أو تيار آخر في الدائرة للتحكم بها."
  }
];

function normalizeElectroQuiz(items) {
  const optionOrder = ["a", "b", "c", "d"];

  return items.map((item, index) => {
    const normalizedOptions = {};
    const normalizedArabicOptions = {};

    optionOrder.forEach((key) => {
      const optionIndex = optionOrder.indexOf(key);
      const englishOption = item.optionsEn[key];
      const arabicOption = item.optionsAr[key];
      normalizedOptions[String.fromCharCode(65 + optionIndex)] = englishOption;
      normalizedArabicOptions[String.fromCharCode(65 + optionIndex)] = arabicOption;
    });

    return {
      id: index + 1,
      question: item.questionEn,
      arabicQuestion: item.questionAr,
      options: normalizedOptions,
      arabicOptions: normalizedArabicOptions,
      correctAnswer: item.answer ? String.fromCharCode(65 + optionOrder.indexOf(item.answer.toLowerCase())) : "A",
      hint: item.hintEn || "",
      arabicHint: item.hintAr || ""
    };
  });
}

const electroCircuitQuiz = normalizeElectroQuiz([...electroCircuitPart1, ...electroCircuitPart2]);
