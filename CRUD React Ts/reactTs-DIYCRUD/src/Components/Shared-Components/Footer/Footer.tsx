
import react from "React";
import { Layout } from 'antd';
const { Footer } = Layout;

let companyName: string = "Tukmein";

export default function footer() {
    return(
        <div>
            <Footer style={{ textAlign: 'center' }}> {companyName} {new Date().getFullYear()} Created by Ant UED</Footer>
        </div>
    )
}