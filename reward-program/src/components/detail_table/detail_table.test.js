import React from "react";
import { render, screen } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import mockFetch from "../../mocks/mockFetch";
import DetailTable from "./detail_table";

beforeEach(() => {
    jest.spyOn(window,"fetch").mockImplementation(mockFetch)
});

afterEach(() => {
    jest.restoreAllMocks()
});

  
test('renders the landing page', async () => {
    render(<DetailTable />);
    expect(await screen.findByRole("thead")).toBeInTheDocument();

});
 
// it("renders rewards data", async () => {
//     // Use the asynchronous version of act to apply resolved promises
//     await act(async () => {
//         render(<DetailTable/>, container);
//     });

// //   expect(container.textContent).toContain('Tess');

//   // remove the mock to ensure tests are completely isolated
//   global.fetch.mockRestore();
// });