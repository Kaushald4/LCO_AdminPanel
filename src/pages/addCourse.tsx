import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Checkbox,
    IconButton,
    Input,
    Typography,
} from "@material-tailwind/react";
import React, { useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { BsPlusCircle } from "react-icons/bs";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import LcoButton from "../components/LcoButton";
import LcoInput from "../components/LcoInput";
import Modal from "../components/Modals/Modal";
import useFilePicker from "../hooks/useImagePicker";
import useLocalStorage from "../hooks/useLocalStorage";

interface ICourse {
    courseTitle: string;
    introTitle: string;
    courseImage: string;
    description: string;
    price: string;
    discountedPrice: string;
    discountPercent: string;
}
interface ICourseSection {
    sectionTitle: string;
    videoUrl?: string;
    videoFile?: File;
}

function AddCourse() {
    const [courseDescription, setCourseDescription] = useState("");

    const courseForm = useForm<ICourse>();
    const courseSectionForm = useForm<ICourseSection>();

    const courseImageFile = useFilePicker();
    const sectionVideoFile = useFilePicker();
    const sectionFormSubmitBtn = useRef<any>();
    const { data, getData, onHandleStorageChange } = useLocalStorage();

    useEffect(() => {
        if (
            courseForm.getValues("courseTitle").length >= 1 ||
            courseForm.getValues("introTitle").length >= 1
        ) {
            onHandleStorageChange("course", {
                title: courseForm.watch("courseTitle"),
                introText: courseForm.watch("introTitle"),
            });
        }
    }, [courseForm.watch("courseTitle"), courseForm.watch("introTitle")]);

    const onCourseDetailSubmit: SubmitHandler<ICourse> = (data) => console.log(data);
    const onCourseSectionSubmit: SubmitHandler<ICourseSection> = (data) => console.log(data);

    const modalContent = () => {
        const { register, handleSubmit } = courseSectionForm;
        return (
            <div className="w-full">
                <form onSubmit={handleSubmit(onCourseSectionSubmit)}>
                    <LcoInput label="Section No." register={register} type="number" required />
                    <div className="my-[10px]" />
                    <LcoInput label="Section Title*" register={register} type="text" required />

                    <input type="submit" hidden ref={sectionFormSubmitBtn} />
                </form>
            </div>
        );
    };

    return (
        <div className="mt-[40px] mx-[20px] border border-gray-200">
            <form className="px-[20px]" onSubmit={courseForm.handleSubmit(onCourseDetailSubmit)}>
                <div className="flex justify-between gap-5">
                    <div className="flex-[2]">
                        <div className="bg-white py-[40px] px-[50px] shadow-md rounded-lg">
                            <LcoInput
                                label="Course Title"
                                register={courseForm.register}
                                type="text"
                                defaultValue={getData("course").title}
                            />
                            <div className="my-[10px]" />
                            <LcoInput
                                label="Intro Title"
                                register={courseForm.register}
                                type="text"
                                defaultValue={getData("course").introText}
                            />
                            <div className="my-[10px]" />
                            <ReactQuill
                                theme="snow"
                                value={courseDescription}
                                onChange={setCourseDescription}
                                placeholder="Description"
                            />
                            <div className="my-[10px]" />
                            <div className="flex gap-5 justify-between">
                                <LcoInput
                                    label="Price"
                                    register={courseForm.register}
                                    type="number"
                                    currency
                                />
                                <LcoInput
                                    label="Discount (%)"
                                    register={courseForm.register}
                                    type="number"
                                    currency
                                />
                                <LcoInput
                                    label="Selling Price"
                                    register={courseForm.register}
                                    type="number"
                                    currency
                                    disabled
                                />
                            </div>
                            <div className="my-[15px]" />
                            <LcoInput
                                label="Validity"
                                register={courseForm.register}
                                type="date"
                                currency
                            />
                            <div className="my-[15px]" />
                            <Checkbox label="Mark as Free Course" />
                        </div>
                    </div>

                    <div className="flex-[1]">
                        <Card className="w-96">
                            <CardHeader color="blue" className="relative h-56">
                                <img
                                    src={courseImageFile.previewUrl}
                                    alt="img-blur-shadow"
                                    className="h-full w-full"
                                />
                            </CardHeader>
                            <CardBody className="text-center">
                                <label htmlFor="courseImage">Select Image</label>
                                <input
                                    id="courseImage"
                                    type="file"
                                    hidden
                                    onChange={courseImageFile.onHandleFileChange}
                                />
                            </CardBody>
                        </Card>
                        bhsbhbh
                    </div>
                </div>
            </form>

            {/* add course sections */}
            {/* <Modal
                cancelText="Cancel"
                onCancel={() => {}}
                content={modalContent}
                handleModalOpen={() => {
                    sectionFormSubmitBtn.current.click();
                }}
                headerTitle="Add New Course Section"
                okText="ADD"
                show
            /> */}
        </div>
    );
}

export default AddCourse;
