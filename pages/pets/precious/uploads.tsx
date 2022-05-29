import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import FormInput from "@/components/form-input";
import HorizontalButton from "@/components/horizontal-button";
import MainBody from "@/components/layouts/main-body";
import clazz from "libs/clients/clazz";
import Image from "next/image";

type PrettyPetTag = string;

interface PrettyUploadForm {
  description: string;
  tags: PrettyPetTag[];
  photoPreview?: FileList;
  photo?: string;
}

export default function PrettyUploads() {
  const [allTags, setAllTags] = useState<PrettyPetTag[]>([
    "tag1",
    "tag2",
    "tag3",
  ]);
  const [photoPreview, setPhotoPreview] = useState("");

  const { register, handleSubmit, watch } = useForm<PrettyUploadForm>();
  const isFormValid = ({
    description,
    tags,
    photoPreview,
  }: PrettyUploadForm) => {
    // Upload precious pet
    console.log(description, tags, photoPreview);
  };

  const isTagSelected = (tag: PrettyPetTag) => {
    const tags = watch("tags");
    if (!tags) return false;
    return tags.some((t) => t === tag) || false;
  };

  const preview = watch("photoPreview");
  useEffect(() => {
    if (preview?.length) {
      const file = preview[0];
      setPhotoPreview(URL.createObjectURL(file));
    }
  }, [preview]);

  return (
    <MainBody>
      <article className="p-5">
        <section>
          <form className="space-y-3" onSubmit={handleSubmit(isFormValid)}>
            <label
              className={clazz(
                "w-full h-64 flex justify-center items-center border-2 border-violet-300 hover:border-violet-500 rounded-md cursor-pointer relative",
                photoPreview ? "border-none" : "border-dashed"
              )}
            >
              {photoPreview ? (
                <Image
                  className="object-cover"
                  src={photoPreview}
                  layout="fill"
                />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-violet-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              )}

              <input
                className="hidden"
                accept="image/*"
                type="file"
                {...register("photoPreview")}
              />
            </label>

            {/* Tags */}
            <ul className="flex items-center gap-3">
              {allTags.map((tag) => (
                <motion.li
                  key={tag}
                  whileHover={{
                    scale: 1.2,
                  }}
                  whileTap={{
                    scale: 0.8,
                  }}
                  className={clazz(
                    "flex items-center gap-2 border rounded-full text-sm tracking-wider select-none",
                    isTagSelected(tag)
                      ? "bg-violet-400 text-white"
                      : "border-violet-500 text-violet-500"
                  )}
                >
                  <input
                    className="hidden w-full h-full"
                    {...register("tags")}
                    type="checkbox"
                    value={tag}
                    id={tag}
                  />
                  <label className="py-1 px-3 cursor-pointer" htmlFor={tag}>
                    {tag}
                  </label>
                </motion.li>
              ))}
            </ul>

            {/* Description */}
            <FormInput
              register={register("description", {
                required: "설명은 필수값 입니다.",
              })}
              type="text"
              placeholder="설명을 입력해주세요."
              required
            />

            {/* Button */}
            <HorizontalButton text="업로드" type="submit" />
          </form>
        </section>
      </article>
    </MainBody>
  );
}
