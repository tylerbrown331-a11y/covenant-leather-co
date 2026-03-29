import { defineField, defineType } from "sanity";

export const productSchema = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      description: "Click 'Generate' after entering the product name. This becomes the web address, e.g. /products/my-new-journal.",
      type: "slug",
      options: { source: "name" },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "story",
      title: "Product Story",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "price_base",
      title: "Base Price ($)",
      type: "number",
      validation: (r) => r.required().min(0),
    }),
    defineField({
      name: "images",
      title: "Product Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "badge",
      title: "Badge",
      type: "string",
      options: {
        list: [
          { title: "None", value: "" },
          { title: "New", value: "New" },
          { title: "Best Seller", value: "Best Seller" },
          { title: "Mission Favorite", value: "Mission Favorite" },
        ],
      },
    }),
    defineField({
      name: "in_stock",
      title: "In Stock",
      description: "Uncheck this to hide the product from the website without deleting it.",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "tags",
      title: "⚠️ Tags — CONTROLS WHICH PAGES THIS PRODUCT APPEARS ON",
      description:
        "Select ALL that apply. " +
        "→ 'mission' = shows on the Mission Journals page. " +
        "→ 'gift' = shows on the Gifts page. " +
        "→ 'bestseller' = shows in the Featured section on the Homepage. " +
        "Every product always appears on the Shop All page regardless of tags.",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "✅ mission → appears on Mission Journals page", value: "mission" },
          { title: "✅ gift → appears on Gifts page", value: "gift" },
          { title: "✅ bestseller → appears on Homepage featured section", value: "bestseller" },
          { title: "scripture", value: "scripture" },
          { title: "pocket", value: "pocket" },
          { title: "set", value: "set" },
          { title: "mission favorite", value: "mission favorite" },
        ],
      },
    }),
    defineField({
      name: "sizes",
      title: "Available Sizes",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Pocket (4x6)", value: "Pocket (4x6)" },
          { title: "Standard (5x8)", value: "Standard (5x8)" },
          { title: "Large (8x10)", value: "Large (8x10)" },
        ],
      },
    }),
    defineField({
      name: "cover_styles",
      title: "Available Cover Styles",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Classic Wrap", value: "Classic Wrap" },
          { title: "Zipper Closure", value: "Zipper Closure" },
          { title: "Brass Clasp", value: "Brass Clasp" },
          { title: "Open", value: "Open" },
        ],
      },
    }),
    defineField({
      name: "paper_types",
      title: "Available Paper Types",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Lined", value: "Lined" },
          { title: "Blank", value: "Blank" },
          { title: "Dotted", value: "Dotted" },
          { title: "Mixed", value: "Mixed" },
        ],
      },
    }),
    defineField({
      name: "leather_type",
      title: "Leather Type",
      type: "string",
    }),
    defineField({
      name: "thread_color",
      title: "Thread Color",
      type: "string",
    }),
    defineField({
      name: "page_count",
      title: "Page Count",
      type: "number",
    }),
    defineField({
      name: "paper_weight",
      title: "Paper Weight",
      type: "string",
    }),
    defineField({
      name: "care",
      title: "Care Instructions",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "size_upcharges",
      title: "Size Upcharges ($)",
      description: "Extra cost per size. E.g. Pocket: -5, Large: +10",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "size", title: "Size", type: "string" },
            { name: "upcharge", title: "Upcharge ($)", type: "number" },
          ],
          preview: { select: { title: "size", subtitle: "upcharge" } },
        },
      ],
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "price_base", media: "images.0" },
    prepare({ title, subtitle, media }) {
      return { title, subtitle: subtitle ? `$${subtitle}` : "", media };
    },
  },
});
