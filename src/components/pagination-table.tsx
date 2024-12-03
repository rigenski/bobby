import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { cn } from '@/utils/classname';

interface PaginationDataProps {
    currentPage: number;
    setCurrentPage: (page: number) => void;
    totalPages: number;
    href: (value: number | string) => string;
}

export default function PaginationData({ currentPage, setCurrentPage, totalPages, href }: PaginationDataProps) {
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    if (totalPages === 0) return null;

    return (
        <div>
            {totalPages && (
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                href={href(currentPage - 1)}
                                onClick={() => handlePageChange(currentPage - 1)}
                                className={cn(`${currentPage === 1 ? 'pointer-events-none opacity-50' : ''} text-secondary-foreground`)}
                            />
                        </PaginationItem>
                        {currentPage > 3 && (
                            <>
                                <PaginationItem>
                                    <PaginationLink href={href(1)} onClick={() => handlePageChange(1)} className={cn('bg-card text-card-foreground')}>
                                        1
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <span>...</span>
                                </PaginationItem>
                            </>
                        )}
                        {[...Array(totalPages)].map((_, index) => {
                            const page = index + 1;
                            if (page === currentPage || page === currentPage - 1 || page === currentPage + 1) {
                                return (
                                    <PaginationItem key={index}>
                                        <PaginationLink
                                            href={href(page.toString())}
                                            isActive={currentPage === page}
                                            onClick={() => handlePageChange(page)}
                                            className={cn(currentPage === page ? 'bg-card text-primary' : 'border border-input text-foreground')}
                                        >
                                            {page}
                                        </PaginationLink>
                                    </PaginationItem>
                                );
                            }
                            return null;
                        })}
                        {currentPage < totalPages - 2 && (
                            <>
                                <PaginationItem>
                                    <span>...</span>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink
                                        href={href(totalPages.toString())}
                                        onClick={() => handlePageChange(totalPages)}
                                        className={cn('bg-card text-card-foreground')}
                                    >
                                        {totalPages}
                                    </PaginationLink>
                                </PaginationItem>
                            </>
                        )}
                        <PaginationItem>
                            <PaginationNext
                                href={href(currentPage + 1)}
                                onClick={() => handlePageChange(currentPage + 1)}
                                className={cn(`${currentPage === totalPages ? 'pointer-events-none opacity-50' : ''} text-secondary-foreground`)}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            )}
        </div>
    );
}
