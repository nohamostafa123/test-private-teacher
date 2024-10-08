import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, InputGroup, FormControl } from 'react-bootstrap';

function Search() {
    return (
        <Card className="border-1 mb-4 px-3 py-4">
            <Card.Body>
                <h5 className="card-title text-end">بحث</h5>
                <div className="underline bg-primary mb-4 ms-auto"></div>
                <InputGroup className="mb-3">
                    <InputGroup.Text className="bg-transparent border-0 cursor-pointer">
                        <i className="fa-solid fa-search fa-sm text-muted"></i>
                    </InputGroup.Text>
                    <FormControl
                        type="text"
                        className="border-0 py-3 text-end"
                        placeholder="اكتب محتوى البحث هنا"
                        style={{ fontFamily: 'Tajawal, sans-serif' }}
                    />
                </InputGroup>
            </Card.Body>
        </Card>
    );
}

export default Search;
