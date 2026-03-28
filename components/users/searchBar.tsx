"use client";

import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="mt-3">
      <Container>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Search by name or email"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        </InputGroup>
      </Container>
    </div>
  );
};

export default SearchBar;
