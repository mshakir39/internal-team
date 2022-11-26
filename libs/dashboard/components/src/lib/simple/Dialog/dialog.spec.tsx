import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Dialog from "./dialog";

describe("Dialog", () => {
  it("should render successfully", () => {
    const closeFn = jest.fn();

    const { baseElement } = render(
      <Dialog openModal={true} onCloseCallback={closeFn}>
        This is Child
      </Dialog>
    );

    expect(baseElement).toBeVisible();
    expect(baseElement).toBeInTheDocument();
  });

  it("should render Delete Modal on prop type Delete successfully", () => {
    const closeFn = jest.fn();

    const { baseElement } = render(
      <Dialog openModal={true} onCloseCallback={closeFn} type="Delete" />
    );

    const deleteModal = screen.queryByTestId("delete-modal-testId");

    expect(deleteModal).toBeVisible();
    expect(deleteModal).toBeInTheDocument();
    expect(baseElement).toBeVisible();
    expect(baseElement).toBeInTheDocument();
  });

  it("should render Update Modal on prop type Update successfully", () => {
    const closeFn = jest.fn();

    const { baseElement } = render(
      <Dialog
        openModal={true}
        onCloseCallback={closeFn}
        type="Update"
        title="Team"
      />
    );

    const dialogTitleContainer = screen.queryByTestId("dialog-title-testId");
    const titleEl = dialogTitleContainer?.firstChild;

    expect(dialogTitleContainer).toBeVisible();
    expect(dialogTitleContainer).toBeInTheDocument();
    expect(titleEl?.nodeValue).toContain("UpdateTeam");
    expect(baseElement).toBeVisible();
    expect(baseElement).toBeInTheDocument();
  });

  it("should render Add Modal on prop type Add successfully", () => {
    const closeFn = jest.fn();

    const { baseElement } = render(
      <Dialog
        openModal={true}
        onCloseCallback={closeFn}
        type="Add"
        title="Team"
      />
    );

    const dialogTitleContainer = screen.queryByTestId("dialog-title-testId");
    const titleEl = dialogTitleContainer?.firstChild;

    expect(dialogTitleContainer).toBeVisible();
    expect(dialogTitleContainer).toBeInTheDocument();
    expect(titleEl?.nodeValue).toContain("AddTeam");
    expect(baseElement).toBeVisible();
    expect(baseElement).toBeInTheDocument();
    expect(closeFn.mock.calls.length).toBe(0)
  });
});
