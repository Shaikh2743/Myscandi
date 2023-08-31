import { DemoNoticeComponent as SourceDemoNoticeComponent } from 'SourceComponent/DemoNotice/DemoNotice.component';
import { ReactElement } from 'Type/Common.type';
/** @namespace Myapp/Component/DemoNotice/Component */
export class DemoNoticeComponent extends SourceDemoNoticeComponent {
    render(): ReactElement {
        return (
            <h3> Hello world </h3>
        );
    }
}
export default DemoNoticeComponent;
