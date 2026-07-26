import { Job } from "../models/job.model";
import { asyncHandler } from "../utils/asyncHandler";
import { apiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import mongoose from "mongoose";

const createJob = asyncHandler(async(req, res)=> {
    const {
        title,
        description,
        companyId,
        salary,
        location,
        skills,
        requirements,
        responsibilities,
        status,
        workSpaceType,
        employmentType,
        experienceLevel,
        category,
        applicationDeadline,
        openings
    } = req.body;

    const recruiterId = req.user.userId;

    if(!recruiterId) {
        throw new apiError(401, "Unauthorized");
    }

    if(!mongoose.isValidObjectId(companyId)) {
        throw new apiError(400, "Invalid Company Id");
    }

    if(!title || !description || !companyId || !employmentType || !experienceLevel) {
        throw new apiError(400, "Required Fields Are Missing");
    }

    const job = await Job.create({
        title, description, companyId, recruiterId, salary, location, skills, requirements, responsibilities, workSpaceType, employmentType, experienceLevel, category, applicationDeadline, openings
    });

    return res.status(201)
    .json(
        new ApiResponse(201, job, "Job Created Successfully")
    );
})

export {
    createJob
}