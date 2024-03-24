import { ReactNode, createContext, useContext } from "react";
import resume from "../../assets/resume.json"

export type Experience = {
    companyName: string
    Role: string;
    Start: string;
    End: string;
    Languages: string[];
    Databases: string[];
    Tools: string[];
    Bullets: string[];
}
type ResumeDoc = {
    name: {
        first: string;
        middle: string;
        last: string;
    };
    location: string;
    email: string;
    linkedIn: string;
    github: string;
    summery: string; // Note: Assuming "summery" is intended, typically it would be "summary"
    Experience: Array<Experience>;
};

type ResumeState = {
    resume:ResumeDoc,
}

 function reducer (state:ResumeState, action:string):ResumeState {
    switch (action){
        default:
            return state
    }
 }

 type ResumeContextValue = ResumeState & {
    // should contain all methods that can be called
    //https://rakuten.udemy.com/course/react-typescript-the-practical-guide/learn/lecture/40470682#notes
 };
 export const ResumeContext = createContext<ResumeContextValue|null>(null);

 export function useResumeContext() { 
    // react custom hook functions 
    // must only be called inside of another component or inside another hook
    const resumeCtx = useContext(ResumeContext)!;
    if (resumeCtx === null){
        throw new Error('ResumeContext is Null')
    }
    return resumeCtx;
 }

 type ResumeContextProviderProps = {
    children: ReactNode
 }
 export default function ResumeContextProvider({children}: ResumeContextProviderProps) {
    const ctx: ResumeContextValue = {
        resume: resume,
    };
    return <ResumeContext.Provider value={ctx}>{children}</ResumeContext.Provider>
 }

