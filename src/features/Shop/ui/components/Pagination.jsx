import react from 'react';


function Pagination({ pages, setpages, limit, total }) {
    const totalPages = Math.ceil(total / limit);

    return (
        <div className="mt-8 flex items-center justify-center gap-4">
            <button
                disabled={pages === 0}
                onClick={() => setpages((prev) => prev - 1)}
                className="rounded-lg bg-gray-800 px-4 py-2 disabled:opacity-40"
            >
                Previous
            </button>

            <span>
                Page {pages + 1} of {totalPages}
            </span>

            <button
                disabled={pages + 1 >= totalPages}
                onClick={() => setpages((prev) => prev + 1)}
                className="rounded-lg bg-emerald-600 px-4 py-2 disabled:opacity-40"
            >
                Next
            </button>
        </div>
    );
}

export default Pagination;
