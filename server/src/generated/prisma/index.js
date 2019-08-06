"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "UserMeasurement",
    embedded: false
  },
  {
    name: "Measurement",
    embedded: false
  },
  {
    name: "ExerciseParameter",
    embedded: false
  },
  {
    name: "ExerciseType",
    embedded: false
  },
  {
    name: "Exercise",
    embedded: false
  },
  {
    name: "ExerciseRoutine",
    embedded: false
  },
  {
    name: "Routine",
    embedded: false
  },
  {
    name: "RoutineWorkoutPlan",
    embedded: false
  },
  {
    name: "WorkoutPlan",
    embedded: false
  },
  {
    name: "Workout",
    embedded: false
  },
  {
    name: "WorkoutExercise",
    embedded: false
  },
  {
    name: "WorkoutParameter",
    embedded: false
  },
  {
    name: "DailyExercise",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
exports.prisma = new exports.Prisma();
