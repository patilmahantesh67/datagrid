import React from "react";
import { render, fireEvent, cleanup } from '@testing-library/react';
import DataTable from './index.jsx';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

it('renders datatable correctly', () => {
	const props = [];
  render(<DataTable 
		value = {props}
		data={props}
	/>);
});

it("test delete", (done) => {
	const value = "1";
	function removeData(value) {
		expect(value).toEqual("1");
    done();
  }
	const { getByText } = render(
    <button className="button" data-testid="removeButton" onClick={() => removeData(value)}>Delete</button>
  );
  const node = getByText("Delete");
  fireEvent.click(node);
});

afterEach(cleanup);
  