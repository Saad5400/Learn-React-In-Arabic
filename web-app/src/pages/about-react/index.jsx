import Container from "../../components/shared/Container";
import SectionHead from "../../components/shared/SectionHead";
import Code from "../../components/shared/Code";

/*
Introduction to React:

React is a popular open-source JavaScript library for building user interfaces. It was created by Facebook in 2011 and has since become one of the most widely used front-end technologies in the industry. React is known for its ability to create reusable UI components, its focus on declarative programming, and its performance optimizations.

At its core, React is a component-based library. This means that developers can create small, self-contained UI elements called components, which can be combined to create more complex user interfaces. React also uses a virtual DOM (Document Object Model), which allows it to efficiently update the UI when data changes, without having to re-render the entire page.

React is often used in combination with other technologies, such as Redux for state management, or React Native for building mobile applications. It has a large and active community of developers who contribute to its ongoing development and provide support to newcomers.

Benefits of using React:

There are many benefits to using React for web development projects. Here are some of the key advantages:

1. Improved Performance: React's virtual DOM allows it to update the UI more efficiently than traditional DOM manipulation methods. This means that React applications can have faster rendering times and better overall performance.

2. Reusability: React's component-based architecture makes it easy to create reusable UI elements. This can save developers time and effort when building complex user interfaces, as they can simply reuse existing components rather than building everything from scratch.

3. Declarative Programming: With React, developers can use a declarative programming style, which means that they describe what they want the UI to look like, rather than focusing on the details of how to achieve it. This can make code easier to read and maintain, and can reduce the likelihood of bugs.

4. Large and Active Community: React has a large and supportive community of developers, which means that there are many resources available for learning and troubleshooting. This can be especially helpful for newcomers to the technology.

5. Flexibility: React can be used in a variety of contexts, including server-side rendering, single-page applications, and mobile applications. This makes it a versatile technology that can be used for a wide range of projects.

Overall, React is a powerful and flexible technology that can help developers build high-performing, reusable, and maintainable user interfaces. Its popularity and active community make it a valuable skill for web developers to learn.
*/

export default function Index() {
    return (
        <Container>
            <article className="prose max-w-7xl me-5">
                <SectionHead>رياكت؟ ... ايش رياكت!؟</SectionHead>
                <p>
                    رياكت هي مكتبة جافاسكربت مفتوحة المصدر ومشهورة لبناء واجهات المستخدم.
                    تم تطويرها من قبل فيسبوك في عام 2011 وتم إصدارها لأول مرة في عام 2013 ومنذ ذلك الحين اصبحت رياكت واحدة من اكثر المكتبات شعبية بين مطورين الفرونت اند.
                    لانها معروفة بسهولة تعلمها وقدرتها على انشاء "مكونات" قابلة لاعادة الاستخدام وتركيزها على الاداء.
                </p>
                <p>
                    في جوهرها، رياكت هي مكتبة تعتمد بشكل اساسي على "المكونات" او المعروفة باسم "Components" في اللغة الانجليزية.
                    مما يسمح للمطورين بانشاء عدة مكونات صغيرة تحتوي عناصر الواجهة الرسومية وتجميعها معا لبناء واجهة مستخدم كاملة.
                    رياكت ايضا تستعمل مفهوم ال "Virtual DOM" او ال "DOM الافتراضي" لتحسين اداء التطبيقات.
                </p>
                <p>
                    رياكت تستعمل عادة مع تقنيات اخرى مثل "Redux" لتتبع حالة التطبيق و "React Router" لادارة التنقل بين صفحات التطبيق و "React Native" لبناء تطبيقات الجوال.
                    وتملك رياكت مجتمع كبير وفعال من المطورين المساهمين في تطويرها ودعمها المستمر.
                </p>

                <SectionHead>نظرة سريعة على المكونات</SectionHead>
                <Code className="custom-width" language="javascript" title="jsx">
                    {`let x = 5;
console.log(x);`}
                </Code>
                <div className="custom-width">
                    <figure className="m-0">
                        <img src={process.env.PUBLIC_URL + "/images/3-Videos.png"} alt="Shoes" />
                    </figure>
                </div>
            </article>
        </Container>
    );
}