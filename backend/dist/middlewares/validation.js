export {};
// export const validateBody = (schema: ZodSchema) => {
//   return (req: Request, res: Response, next: NextFunction): void => {
//     try {
//       req.body = schema.parse(req.body)
//       next()
//     } catch (error) {
//       next(error)
//     }
//   }
// }
// export const validateParams = (schema: ZodSchema) => {
//   return (req: Request, res: Response, next: NextFunction): void => {
//     try {
//       req.params = schema.parse(req.params)
//       next()
//     } catch (error) {
//       next(error)
//     }
//   }
// }
// export const validateQuery = (schema: ZodSchema) => {
//   return (req: Request, res: Response, next: NextFunction): void => {
//     try {
//       req.query = schema.parse(req.query)
//       next()
//     } catch (error) {
//       next(error)
//     }
//   }
// }
//# sourceMappingURL=validation.js.map