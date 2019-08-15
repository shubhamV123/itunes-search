import React from "react";
import { Form, Icon, Input, Button } from "antd";

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class SearchForm extends React.Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let { searchKeyWord } = values;
        this.props.fetchKeywordData(searchKeyWord);
      }
    });
  };

  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched
    } = this.props.form;

    // Only show error after a field is touched.
    const searchKeyWordError =
      isFieldTouched("searchKeyWord") && getFieldError("searchKeyWord");
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item
          validateStatus={searchKeyWordError ? "error" : ""}
          help={searchKeyWordError || ""}
        >
          {getFieldDecorator("searchKeyWord", {
            rules: [
              { required: true, message: "Please input the artist name!" }
            ]
          })(
            <Input
              prefix={
                <Icon type="search" style={{ color: "rgba(0,0,0,.25)" }} />
              }
              placeholder="Enter artist name"
            />
          )}
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
          >
            Search
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedSearchForm = Form.create({ name: "search_value" })(SearchForm);
export default WrappedSearchForm;
