import React from 'react'


export const TrabajoCard = ({trabajo}) => {
    return (
        <div className="py-6 px-4 sm:p-6 md:py-6 md:px-8 bg-white rounded my-2">
            <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-1">
                <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                    <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">{trabajo.titulo}</h1>
                </div>
                <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
                    {/* <dt className="sr-only">Date</dt>
                    <dd className="text-indigo-600 flex items-center dark:text-indigo-400">
                        <img src="https://img.icons8.com/ios/50/null/calendar--v1.png" width={24} height={24} className='m-1' />
                        <span>{trabajo.fecha} <span className="text-slate-400 font-normal">({trabajo.hora})</span></span>
                    </dd> */}
                    {/* <dt className="sr-only">Location</dt>
                    <dd className="flex items-center">
                        <svg width="2" height="2" aria-hidden="true" fill="currentColor" className="mx-3 text-slate-300">
                            <circle cx="1" cy="1" r="1" />
                        </svg>
                        <img src="https://img.icons8.com/ios/50/null/marker--v1.png" width={24} height={24} className='m-1' />
                        {trabajo.direccion}
                    </dd> */}
                </dl>
                <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
                    {trabajo.descripcion}
                </p>
                <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
                    {trabajo.requisitos}
                </p>


                
            </div>
        </div>
    )
}
