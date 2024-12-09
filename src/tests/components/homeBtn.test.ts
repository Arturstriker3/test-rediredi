import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import HomeBtn from "@/core/components/homeBtn.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { createVuetify } from "vuetify";
import "vuetify/styles";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/test",
    name: "Test",
    component: { render: () => {} },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const vuetify = createVuetify();

describe("homeBtn.vue", () => {
  it("should render the button with the correct props", () => {
    const wrapper = mount(HomeBtn, {
      global: {
        plugins: [router, vuetify],
      },
      props: {
        name: "Home",
        quantity: 5,
        route: "/test",
      },
    });

    expect(wrapper.text()).toContain("Home");
    expect(wrapper.text()).toContain("5");
  });

  it("should navigate to the correct route when clicked", async () => {
    const push = vi.fn();
    router.push = push;

    const wrapper = mount(HomeBtn, {
      global: {
        plugins: [router, vuetify],
      },
      props: {
        name: "Home",
        quantity: 5,
        route: "/test",
      },
    });

    await wrapper.find("button").trigger("click");

    expect(push).toHaveBeenCalledWith("/test");
  });
});
