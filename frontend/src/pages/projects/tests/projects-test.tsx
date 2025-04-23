import { render, screen } from "@testing-library/react";
import Projects from "..";
import { Provider } from "react-redux";
import { store } from "@/src/app/store";
import { act } from "react-dom/test-utils";
import { useGetAllProjectsQuery } from "../../../shared/api/requests/projects/projects.api";
// Мокаем useGetAllProjectsQuery
jest.mock("../../../shared/api/requests/projects/projects.api", () => ({
  useGetAllProjectsQuery: () => ({
    data: [
      {
        id: 1,
        title: "AgroBazar",
        startAt: "2022-12-31T22:00:00.000Z",
        endAt: "2023-08-31T21:00:00.000Z",
        description: "Agrobazar description",
        link: "https://agrobazar.ru/",
        logo: "https://agrosite.k-digital.pro/img/1.png",
      },
    ],
    isLoading: false,
    isError: false,
  }),
  projectsApi: {
    reducerPath: "projectsApi",
    reducer: () => ({}),
    middleware: () => (next: any) => (action: any) => next(action),
  },
}));

describe("Project list skillet test", () => {
  it("должен отобразить проекты из useGetAllProjectsQuery", async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <Projects />
        </Provider>
      );
    });

    // Проверяем, что заголовок проекта отобразился
    expect(screen.getByText("Projects")).toBeInTheDocument();
  });
});
