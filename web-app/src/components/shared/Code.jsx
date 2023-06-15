import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

SyntaxHighlighter.registerLanguage('javascript', js);

export default function Code(props) {
    return (
        <div className={props.className} dir="ltr">
            <div className='my-0 py-0 bg-neutral-content flex px-1 ps-3'>
                <div className='flex-1'>
                    <h5 className='text-neutral'>
                        {props.title}
                    </h5>
                </div>
                {/* <div className='flex-none'>
                    <h5 className='text-neutral'>
                        <button className='btn btn-ghost btn-xs'>
                            Copy
                        </button>
                    </h5>
                </div> */}
            </div>
            <SyntaxHighlighter {...props} className="mt-0 rounded-none" style={a11yDark} showLineNumbers={true} wrapLongLines={true}>
                {props.children}
            </SyntaxHighlighter>
        </div>
    );
}